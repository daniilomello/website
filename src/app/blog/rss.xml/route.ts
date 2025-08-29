import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import RSS from "rss";

export async function GET() {
  const feed = new RSS({
    title: `${DATA.name}'s Blog`,
    description: DATA.description,
    site_url: `${DATA.url}/blog`,
    feed_url: `${DATA.url}/blog/rss.xml`,
    language: "en",
    image_url: `${DATA.url}/og.png`,
  });

  const posts = await getBlogPosts();

  posts.forEach((post) => {
    feed.item({
      title: post.metadata.title,
      description: post.metadata.summary,
      url: `${DATA.url}/blog/${post.slug}`,
      date: post.metadata.publishedAt,
      author: DATA.name,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
