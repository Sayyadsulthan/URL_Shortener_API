import { config } from "dotenv";
import mongoose from "mongoose";
config();

const db = mongoose.connection;

db.openUri(process.env.DB_URL)
  .then(() => console.log("DB connection is ready to use"))
  .catch((error) => console.error(error.message));

export default db;
