import express from "express";
import { handleGenerateShortenUrl } from "../controllers/urlShortner.js";

const router = express.Router();

router.post("/", handleGenerateShortenUrl);

export default router;
