"use client";

import LanguageFilter from "@/components/LanguageFilter";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface IPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    language: string;
  };
}

export default function BlogClient({ posts }: { posts: any[] }) {
  const [filteredLanguage, setFilteredLanguage] = useState<string | null>("🇺🇸");

  // Filter posts dynamically
  const filteredPosts = filteredLanguage
    ? posts.filter((post) => post.metadata.language === filteredLanguage)
    : posts;

  return (
    <>
      <Link href="/" className="flex items-center gap-2 mb-4 sm:-mt-8 px-8 sm:px-0 hover:text-rose-500 transition">
        <FaArrowLeft size={12} /> Go back
      </Link>

      <section className="h-screen px-8 sm:px-0">
        <h1 className="font-bold text-2xl text-purple-100">Welcome to my articles and notes ✍️</h1>
        <p className="mb-8 text-sm text-white/50">
          Code snippets, ideas, reviews, explorations, and how-to guides.
        </p>

        {/* Filter Component */}
        <LanguageFilter onFilter={setFilteredLanguage} />

        <div className="flex flex-col gap-3">
          {filteredPosts
            .sort((a, b) => new Date(b.metadata.publishedAt as string).getTime() - new Date(a.metadata.publishedAt as string).getTime())
            .map((post) => (
              <>
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="hover:text-purple-500/50 transition text-lg"
                >
                  <strong className="flex items-center justify-between">
                    <span>
                      {post.metadata.language} &nbsp; {post.metadata.title}
                    </span>
                    <span className="hidden sm:block text-xs">
                      {new Date(post.metadata.publishedAt).getFullYear()}
                    </span>
                  </strong>
                </Link>
                <hr className="opacity-[0.05]" />
              </>
            ))}
        </div>
      </section>
    </>
  );
}
