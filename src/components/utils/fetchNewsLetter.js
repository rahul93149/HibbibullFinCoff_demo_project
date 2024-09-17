// utils/fetchNewsletter.js
import Parser from 'rss-parser';

const parser = new Parser();

export const fetchNewsletter = async (rssUrl) => {
  try {
    const feed = await parser.parseURL(rssUrl);
    return feed.items.map((item) => ({
      title: item.title,
      excerpt: item.contentSnippet,
      link: item.link,
      thumbnail: item.enclosure ? item.enclosure.url : "/images/sahil_ceo.jfif",
    }));
  } catch (error) {
    console.error("Failed to fetch RSS feed:", error);
    return [];
  }
};
