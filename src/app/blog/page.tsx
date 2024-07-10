import { Header } from "@/components/header";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Header />
      <section className="h-screen">
        <h1 className="font-bold text-2xl mb-8 text-purple-100">Welcome to my articles and notes ✍️</h1>

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
              className="hover:text-purple-500/50 transition text-lg"
            >
              - {post.metadata.title}
            </Link>
          ))}
      </section>
    </>
  );
}
