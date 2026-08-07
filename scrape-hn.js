#!/usr/bin/env node

/**
 * Hacker News Scraper
 * Extracts front page posts into clean JSON
 */

const https = require('https');

const API_URL = 'https://scraper-api-demo.inquisitive-bluebell.workers.dev/scrape';
const HN_URL = 'https://news.ycombinator.com';

/**
 * Scrape HN front page via API
 */
async function scrapeHN() {
  const payload = JSON.stringify({ url: HN_URL });

  return new Promise((resolve, reject) => {
    const req = https.request(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': payload.length
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`API returned ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

/**
 * Parse HN HTML structure into clean format
 */
function parseHNPosts(apiResponse) {
  const { content, links, metadata } = apiResponse;

  // HN structure: title links are in .titleline
  // Points/comments are in .subtext
  const posts = [];

  // Extract from links array (API returns all links with text)
  let rank = 1;
  links.forEach(link => {
    // HN post links are external (not news.ycombinator.com)
    if (link.href && !link.href.includes('news.ycombinator.com') && link.text && link.text.length > 10) {
      posts.push({
        rank: rank++,
        title: link.text,
        url: link.href
      });
    }
  });

  return {
    scrapedAt: new Date().toISOString(),
    source: HN_URL,
    totalPosts: posts.length,
    posts: posts.slice(0, 30), // Top 30 posts
    metadata: {
      wordCount: metadata?.wordCount || 0,
      linkCount: links.length
    }
  };
}

/**
 * Main execution
 */
async function main() {
  console.log('🔍 Scraping Hacker News front page...\n');

  try {
    const apiResponse = await scrapeHN();
    const parsed = parseHNPosts(apiResponse);

    console.log(JSON.stringify(parsed, null, 2));
    console.log(`\n✅ Extracted ${parsed.totalPosts} posts from Hacker News`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = { scrapeHN, parseHNPosts };
