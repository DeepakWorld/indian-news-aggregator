// Example: Fetch Times of India RSS via rss2json
const feeds = [
  {
    title: "Times of India",
    url: "https://timesofindia.indiatimes.com/rss.cms"
  },
  {
    title: "NDTV News",
    url: "https://feeds.feedburner.com/ndtvnews-top-stories"
  },
  {
    title: "The Hindu",
    url: "https://www.thehindu.com/rssfeeds/"
  },
  {
    title: "Indian Express",
    url: "https://indianexpress.com/feed/"
  }
];

const container = document.getElementById("feeds");

feeds.forEach(feed => {
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const card = document.createElement("div");
      card.className = "feed-card";
      
      // Show feed title
      let html = `<h3>${feed.title}</h3>`;
      
      // Show first 3 headlines
      data.items.slice(0, 3).forEach(item => {
        html += `
          <p><a href="${item.link}" target="_blank">${item.title}</a></p>
        `;
      });
      
      card.innerHTML = html;
      container.appendChild(card);
    })
    .catch(err => {
      console.error("Error fetching feed:", feed.title, err);
    });
});
