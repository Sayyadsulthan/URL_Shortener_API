import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/User.js";
import { configDotenv } from "dotenv";
configDotenv();

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretKey;

passport.use(
  new Strategy(opts, function (payload, done) {
    User.findOne({ id: payload._id })
      .then((user) => {
        if (!user) {
          return done(null, false);
        }

        return done(null, user);
      })
      .catch((error) => {
        return done(error);
      });
  })
);

export default passport;
