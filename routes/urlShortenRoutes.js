import express from "express";
import passport from "passport";
import {
  handleGenerateShortenUrl,
  handleGetOriginalUrl,
} from "../controllers/urlShortnerController.js";

const router = express.Router();

router.post(
  "/",
  passport.authenticate("jwt", {
    session: false,
  }),
  handleGenerateShortenUrl
);
router.get(
  "/:shortId",
  passport.authenticate("jwt", {
    session: false,
  }),
  handleGetOriginalUrl
);

export default router;
