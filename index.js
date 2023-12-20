import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();

import DB from "./config/mongoose.js";
import shortner from "./routes/shorten.js";
const App = express();
const PORT = process.env.PORT || 8000;

App.use(express.json());

App.use("/shorten", shortner);

App.listen(PORT, (err) => {
  err
    ? console.log("Error in Server Listening :", err)
    : console.log(`Server is up and Running on Port : ${PORT}`);
});
