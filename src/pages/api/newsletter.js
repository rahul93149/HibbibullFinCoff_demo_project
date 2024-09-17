// pages/api/newsletter.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  const RSS_URL =
    "https://www.linkedin.com/newsletters/brewing-standards-%F0%9F%92%B8-7218956408698855426";

  try {
    const response = await fetch(RSS_URL);
    const text = await response.text();
    res.setHeader("Content-Type", "text/xml");
    res.status(200).send(text);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch RSS feed" });
  }
}
