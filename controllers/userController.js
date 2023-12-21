import User from "../models/User.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { configDotenv } from "dotenv";
configDotenv();

export const handleRegisterUser = async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body;
    // verifying the client put the required data
    if (password !== confirmPassword || !username) {
      return res.status(400).json({ message: "Invalid Credencials" });
    }

    const user = await User.findOne({ name: username });

    // check user exist or not
    if (user) {
      return res.status(403).json({ message: "User already exist" });
    }
    // creating a password for hash and store in db
    const salt = bcrypt.genSaltSync(Number(process.env.saltRounds));
    const hash = bcrypt.hashSync(password, salt);

    // creating user
    await User.create({ name: username, password: hash });

    res.status(201).json({ message: "User registration completed" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const handleLoginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // finding the user and not adding password
    const user = await User.findOne({ name: username });

    if (!user) return res.status(404).json({ message: "User not found" });
    // verifying a user by password compare
    const isValidUser = bcrypt.compareSync(password, user.password);
    if (!isValidUser) {
      return res.status(401).json({ message: "Invalid password" });
    }
    // creating Jwt Token for authentication
    const Token = await Jwt.sign(
      {
        user: {
          _id: user._id,
          name: user.name,
        },
      },
      process.env.secretKey,
      {
        algorithm: "HS256",
      }
    );

    // passing to response
    res.status(200).json({ Token });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
