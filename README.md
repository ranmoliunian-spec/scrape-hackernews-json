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

**Works locally, no API key required.** Uses native fetch + cheerio for HTML parsing.

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

Fetches HN HTML directly via HTTPS, then parses the structure with Cheerio to extract posts, titles, and metadata.

**Standalone scraping** - No API, no auth, no rate limits. Just clone and run.

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
