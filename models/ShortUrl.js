import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema(
  {
    shortUrlId: {
      type: String,
      required: true,
      unique: true,
    },
    originalUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);

export default ShortUrl;
