import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Parser from "rss-parser";

const rssParser = new Parser();

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 }
    );
  }

  const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(
    query
  )}`;

  try {
    // Fetch and parse the RSS feed
    const feed = await rssParser.parseURL(rssUrl);

    const articles = feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      date: item.pubDate,
    }));

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
