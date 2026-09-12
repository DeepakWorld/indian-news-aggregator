// Example static feed data (replace with RSS parsing later)
const feeds = [
  {
    title: "Times of India – Latest Headlines",
    description: "Breaking news and top stories from India’s leading daily.",
    link: "https://timesofindia.indiatimes.com/rss.cms"
  },
  {
    title: "NDTV News",
    description: "Latest updates on politics, business, and world affairs.",
    link: "https://feeds.feedburner.com/ndtvnews-top-stories"
  },
  {
    title: "The Hindu",
    description: "Trusted reporting on national and international issues.",
    link: "https://www.thehindu.com/rssfeeds/"
  },
  {
    title: "Indian Express",
    description: "Comprehensive coverage of politics, sports, and culture.",
    link: "https://indianexpress.com/feed/"
  }
];

// Render feed cards
const container = document.getElementById("feeds");
feeds.forEach(feed => {
  const card = document.createElement("div");
  card.className = "feed-card";
  card.innerHTML = `
    <h3>${feed.title}</h3>
    <p>${feed.description}</p>
    <a href="${feed.link}" target="_blank">View Feed</a>
  `;
  container.appendChild(card);
});
