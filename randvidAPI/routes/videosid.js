const express = require("express");
const router = express.Router();
const axios = require("axios");
const { google } = require("googleapis");
const apiKey = "AIzaSyDROJ8DMpvGgkU2BZaRfHf0tqBRywq4hmk";
const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

router.get("/", async (req, res, next) => {
  try {
    const response = await youtube.search.list({
      part: "snippet",
      q: "animal cat memes funny",
      type: "video",
      videoDuration: "short",
      maxResults: "50",
    });

    const videoid = response.data.items.map((item) => item.id.videoId);
    res.send(videoid);
    console.log("100 Quotas lost");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
