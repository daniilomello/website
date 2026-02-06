import { ArticleContent } from "@/components/ArticleContent";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GiscusComments } from "@/components/GiscusComments";
import { Header } from "@/components/Header";
import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);
  if (!post) return;

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      locale: post.metadata.language === "🇧🇷" ? "pt_BR" : "en_US",
      images: [
        {
          url: post.metadata.image || `https://daniilo.dev/og.png`,
          width: 1200,
          height: 630,
          alt: "Full Stack Developer Creates Digital Products",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: post.metadata.image || `https://daniilo.dev/og.png`,
        },
      ],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post || post.metadata.draft) {
    notFound();
  }

  return (
    <>
      <Header />
      <Breadcrumbs />
      <section
        id="blog"
        className="blog h-min-screen px-8 sm:px-0 sm:max-w-[45.5rem] pb-8 sm:mx-auto sm:mt-10"
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${DATA.url}${post.metadata.image}`
                : `${DATA.url}/og?title=${post.metadata.title}`,
              url: `${DATA.url}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: DATA.name,
              },
            }),
          }}
        />
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

        <div className="mt-16">
          <GiscusComments />
        </div>
      </section>
    </>
  );
}
