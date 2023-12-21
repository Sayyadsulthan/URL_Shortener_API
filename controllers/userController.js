import User from "../models/User.js";
import Jwt from "jsonwebtoken";

export const handleRegisterUser = async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body;
    // verifying the client put the required data
    if (password !== confirmPassword || !username) {
      return res.status(400).json({ message: "Invalid Credencials" });
    }

    const user = await User.findOne({ name: username, password: password });

    // check user exist or not
    if (user) {
      return res.status(403).json({ message: "User already exist" });
    }
    // creating user
    await User.create({ name: username, password });

    res.status(201).json({ message: "User registration completed" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const handleLoginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // finding the user and not adding password
    const user = await User.findOne({ name: username, password }).select(
      "-password"
    );

    if (!user) return res.status(404).json({ message: "User not found" });
    // creating Jwt Token for authentication
    const Token = await Jwt.sign({ user: user }, process.env.secretKey, {
      algorithm: "HS256",
    });

    // passing to response
    res.status(200).json({ Token });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
