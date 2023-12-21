import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { configDotenv } from "dotenv";
configDotenv();

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ name: username });

      if (!user) {
        return done(null, false);
      }

      // check if the password is valid or not
      const isValidPassword = bcrypt.compareSync(password, user.password);

      if (!isValidPassword) return done(null, false);

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

export default passport;
