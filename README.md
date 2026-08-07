# Hacker News Scraper → Clean JSON

Extract Hacker News posts, comments, and rankings into structured JSON. No browser automation needed.

## What This Does

Scrapes Hacker News front page and returns:
- Post titles, URLs, points, authors
- Comment threads with nested structure
- User profiles and karma
- Clean JSON output, ready for analysis

## Quick Start

```bash
npm install
node scrape-hn.js
```

Output example:
```json
{
  "posts": [
    {
      "rank": 1,
      "title": "Show HN: Built a scraper API",
      "url": "https://example.com",
      "points": 234,
      "author": "username",
      "commentsCount": 45,
      "time": "2 hours ago"
    }
  ]
}
```

## How It Works

Uses [@scraper-api/client](https://github.com/ranmoliunian-spec/scraper-api-client) for reliable HTML extraction, then parses HN's structure with Cheerio.

**Why not just fetch HTML directly?** HN has rate limiting and anti-bot protection. This approach handles that automatically.

## API Used

This example uses [Scraper API](https://github.com/ranmoliunian-spec/scraper-api) - a web scraping service that handles:
- ✅ Anti-bot bypass
- ✅ Rate limiting
- ✅ Proxy rotation
- ✅ Clean HTML extraction

Try the [npm client](https://github.com/ranmoliunian-spec/scraper-api-client).

## Use Cases

- 📊 **Track trending topics** - Monitor HN front page for industry signals
- 🔍 **Job board aggregator** - Extract "Who's Hiring" threads automatically
- 📈 **Engagement analysis** - Analyze what content performs well
- 🤖 **AI training data** - Build datasets from high-quality discussions

## Files

- `scrape-hn.js` - Main scraper (100 lines)
- `parse-hn.js` - HTML parser for HN structure
- `package.json` - Dependencies

## Alternatives

- **CLI version**: [@scraper-api/cli](https://github.com/ranmoliunian-spec/scraper-cli)
- **Python version**: Coming soon
- **Browser extension**: Coming soon

## License

MIT - Use freely for any purpose
