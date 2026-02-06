import { ArticleContent } from "@/components/ArticleContent";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Header } from "@/components/Header";
import { getDraftPost, getDraftPosts } from "@/data/blog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getDraftPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  const post = await getDraftPost(params.slug);
  if (!post) return;

  return {
    title: `[Draft] ${post.metadata.title}`,
    description: post.metadata.summary,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export default async function DraftPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getDraftPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <Breadcrumbs />
      <section
        id="draft"
        className="blog h-min-screen px-8 sm:px-0 sm:max-w-[45.5rem] pb-8 sm:mx-auto sm:mt-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-2 py-0.5 rounded-full font-medium">
            Draft
          </span>
        </div>

        <h1 className="font-title font-bold text-3xl sm:text-5xl mb-4 text-foreground">
          {post.metadata.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime={post.metadata.publishedAt}>
            {new Date(post.metadata.publishedAt).toLocaleDateString(
              post.metadata.language === "🇧🇷" ? "pt-BR" : "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </time>
        </div>

        <ArticleContent html={post.source} />
      </section>
    </>
  );
}
