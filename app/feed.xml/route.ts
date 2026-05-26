import { getAllPosts, siteUrl, topicMeta } from "@/lib/content";

export async function GET(): Promise<Response> {
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const postUrl = `${siteUrl}/writing/${post.slug}`;
      const category = topicMeta[post.topic].label;

      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${postUrl}</link>
          <guid>${postUrl}</guid>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
          <description><![CDATA[${post.description}]]></description>
          <category>${category}</category>
        </item>
      `;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Nate Brantley</title>
        <link>${siteUrl}</link>
        <description>A cohesive stream on business, trading cards, stocks, and real estate.</description>
        <language>en-us</language>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
