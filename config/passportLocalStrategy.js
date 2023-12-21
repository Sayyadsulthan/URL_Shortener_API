import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/User.js";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ name: username, password });

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

export default passport;
