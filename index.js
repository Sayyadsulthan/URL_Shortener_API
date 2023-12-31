import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();

import DB from "./config/mongoose.js";
import ShortUrl from "./models/ShortUrl.js";
import User from "./models/User.js";
import shortnerRoutes from "./routes/urlShortenRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import passport from "passport";
import passportJWTStrategy from "./config/passportJWTStrategy.js";
import passpoerLocalStrategy from "./config/passportLocalStrategy.js";
const App = express();
const PORT = process.env.PORT || 8000;

App.use(express.json());
// used for form submission x-www-form-urlencoded
App.use(express.urlencoded({ extended: true }));

App.use("/shorten", shortnerRoutes);
App.use("/user", userRoutes);
App.use(passport.initialize());

App.listen(PORT, (err) => {
  err
    ? console.log("Error in Server Listening :", err)
    : console.log(`Server is up and Running on Port : ${PORT}`);
});
