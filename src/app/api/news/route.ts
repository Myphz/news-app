import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Parser from "rss-parser";

const rssParser = new Parser();

export type Article = Partial<{
  title: string;
  link: string;
  date: string;
}>;

const getRSSUrl = (searchParams: URLSearchParams) => {
  const params = Object.fromEntries(searchParams);

  if (params.topic)
    return `https://news.google.com/rss/headlines/section/topic/${encodeURIComponent(
      params.topic
    )}`;

  if (params.query)
    return `https://news.google.com/rss/search?q=${encodeURIComponent(
      params.query
    )}`;

  return null;
};

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);

  const rssUrl = getRSSUrl(searchParams);
  if (!rssUrl)
    return NextResponse.json(
      { error: "Invalid query parameters" },
      { status: 400 }
    );

  try {
    // Fetch and parse the RSS feed
    const feed = await rssParser.parseURL(rssUrl);

    const articles: Article[] = feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      date: item.pubDate,
    }));

    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
