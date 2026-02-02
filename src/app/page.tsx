import BlogClient from "@/components/BlogClient";
import { Header } from "@/components/Header";
import { getBlogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog - Danilo Mello - Software Engineer",
  description: "My thoughts on software development, life, and more.",
};

export default async function Page() {
  const posts = await getBlogPosts();

  return (
    <>
      <Header />
      <BlogClient posts={posts} />
    </>
  );
}

