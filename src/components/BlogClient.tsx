"use client";

import LanguageFilter from "@/components/LanguageFilter";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Story } from "./Stories";

type Post = {
  slug: string;
  metadata: {
    title: string;
    language: string;
    publishedAt: string;
    category: string;
  };
};

const storiesData: Story[] = [
  {
    id: 1,
    thumbnail: "https://github.com/daniilomello.png",
    youtubeVideoId: "5OFVArgGgdI",
  },
];

const categoriesColors: Record<string, string> = {
  "career": "text-pink-400",
  "code": "text-indigo-400",
  "notes": "text-fuchsia-600",
  "product": "text-sky-400",
}

export default function BlogClient({ posts }: { posts: Post[] }) {
  const [filteredLanguage, setFilteredLanguage] = useState<string | null>("🇺🇸");

  const filteredPosts = filteredLanguage
    ? posts.filter((post) => post.metadata.language === filteredLanguage)
    : posts;

  const sortedPosts = [...filteredPosts].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <>
      <Link
        href="/"
        className="flex items-center gap-2 mb-4 sm:-mt-8 px-8 sm:px-0 hover:text-rose-500 transition"
      >
        <FaArrowLeft size={12} /> Go back
      </Link>

      <section className="min-h-screen px-8 sm:px-0">
        <h1 className="font-bold text-2xl text-purple-100">
          Welcome to my articles and notes ✍️
        </h1>
        <p className="mb-8 text-sm text-white/50">
          Code snippets, ideas, reviews, explorations, and how-to guides.
        </p>

        <LanguageFilter onFilter={setFilteredLanguage} />

        <div className="flex flex-col gap-3">
          {sortedPosts.length === 0 ? (
            <p className="text-white/50">No posts found for this language.</p>
          ) : (
            sortedPosts.map((post) => (
              <div key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-purple-500/50 transition text-lg"
                >
                  <strong className="flex items-center justify-between">
                    <span>
                      {post.metadata.language} &nbsp; {post.metadata.title}
                    </span>
                    <span className="hidden sm:flex text-[10px] gap-2">
                      <span className={cn
                        (
                          "rounded-full",
                          categoriesColors[post.metadata.category]
                        )
                      }>
                        {post.metadata.category}
                      </span>
                      &bull;
                      <span>
                        {new Date(post.metadata.publishedAt).getFullYear()}</span>
                    </span>
                  </strong>
                </Link>
                <hr className="opacity-[0.05]" />
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
