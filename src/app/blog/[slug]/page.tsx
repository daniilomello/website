import { Header } from "@/components/header";
import { getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

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
      images: [
        {
          url: "https://daniilo.dev/og.png",
          width: 1200, // Recommended width
          height: 630,  // Recommended height
          alt: "Full Stack Develper Creates Digital Products"
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <Link href="/blog" className="flex items-center gap-2 mb-4 sm:-mt-8 px-8 sm:px-0 hover:text-rose-500 transition">
        <FaArrowLeft size={12} /> Go Back
      </Link>
      <section id="blog" className="blog h-min-screen px-8 sm:px-0 sm:max-w-[45.5rem] pb-8 sm:mx-auto sm:mt-10">
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
        <h1 className="font-bold text-3xl sm:text-5xl mb-8 text-purple-100">{post.metadata.title}</h1>

        <article dangerouslySetInnerHTML={{ __html: post.source }}></article>
      </section>
    </>
  );
}
