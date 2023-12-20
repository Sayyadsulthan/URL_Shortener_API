import express from "express";
import {
  handleGenerateShortenUrl,
  handleGetOriginalUrl,
} from "../controllers/urlShortner.js";

const router = express.Router();

router.post("/", handleGenerateShortenUrl);
router.get("/:shortId", handleGetOriginalUrl);

export default router;
