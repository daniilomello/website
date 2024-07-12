import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
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
      <section className="h-screen px-8 sm:px-0">
        <Badge variant="secondary" className="mb-4 bg-purple-600/30">Notes are currently in portuguese 🇧🇷</Badge>
        <h1 className="font-bold text-2xl text-purple-100">Welcome to my articles and notes ✍️</h1>
        <p className="mb-8 text-sm text-white/50">Code snippets, ideas, reviews, explorations and how-to guides. <br />I write about different topics not always related to tech.</p>

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
