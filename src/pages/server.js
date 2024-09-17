// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors"); // For handling CORS issues

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for your backend

app.get("/rss-feed", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.linkedin.com/newsletters/brewing-standards-%F0%9F%92%B8-7218956408698855426"
    );
    res.set("Content-Type", "application/xml");
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error fetching the RSS feed");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
