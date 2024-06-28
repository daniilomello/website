import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <h1>blog</h1>

      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
          >
            <div>
              <p>{post.metadata.title}</p>
              <p>
                {post.metadata.publishedAt}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
