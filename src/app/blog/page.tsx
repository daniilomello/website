import BlogClient from "@/components/BlogClient";
import { Header } from "@/components/Header";
import { getBlogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Header />
      <BlogClient posts={posts} />
    </>
  );
}

