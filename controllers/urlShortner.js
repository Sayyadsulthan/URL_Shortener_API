export const handleGenerateShortenUrl = async (req, res) => {
  try {
    // console.log("body url : ", req.body.url);
    res.status(200).json({ message: "received data", data: req.body.url });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
