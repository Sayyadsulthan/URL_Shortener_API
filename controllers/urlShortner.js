import ShortUniqueId from "short-unique-id";
import ShortUrl from "../models/shortUrl.js";

export const handleGenerateShortenUrl = async (req, res) => {
  try {
    // getting the url from request body
    const { url } = req.body;
    // if url not found
    if (!url)
      return res.status(400).json({ message: "Bad request, fill the data" });

    //   using randomId creating of 8 length
    const { randomUUID } = new ShortUniqueId({ length: 8 });
    const shortID = randomUUID();

    // storing original url with created shortId
    const data = await ShortUrl.create({
      shortUrlId: shortID,
      originalUrl: url,
    });

    res
      .status(200)
      .json({ originalUrl: data.originalUrl, shortUrl: data.shortUrlId });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const handleGetOriginalUrl = async (req, res) => {
  try {
    // getting shortId from request params
    const { shortId } = req.params;

    // if shortId not found
    if (!shortId)
      return res.status(400).json({ message: "Enter the shortUrl " });

    //   finding the data from database
    const data = await ShortUrl.findOne({
      shortUrlId: shortId,
    });

    // redirecting the user to the original page
    res.redirect(data.originalUrl);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
