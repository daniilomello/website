import { Breadcrumbs } from "@/components/Breadcrumbs";
import CodeBlock from "@/components/CodeBlock";
import { GiscusComments } from "@/components/GiscusComments";
import { Header } from "@/components/Header";
import { getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import parse from "html-react-parser";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
  } = post!.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description: post!.metadata.summary.replace(/^<p>/, "").replace(/<\/p>$/, ""),
    openGraph: {
      title,
      description: post!.metadata.summary.replace(/^<p>/, "").replace(/<\/p>$/, ""),
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post!.slug}`,
      locale: post!.metadata.language === "🇧🇷" ? "pt_BR" : "en_US",
      images: [
        {
          url: post!.metadata.image || `https://daniilo.dev/og.png`,
          width: 1200,
          height: 630,
          alt: "Full Stack Developer Creates Digital Products",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post!.metadata.summary.replace(/^<p>/, "").replace(/<\/p>$/, ""),
      images: [
        {
          url: post!.metadata.image || `https://daniilo.dev/og.png`,
        }
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

  if (!post) {
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
        <h1 className="font-title font-bold text-3xl sm:text-5xl mb-8 text-foreground">
          {post.metadata.title}
        </h1>

        <article className="max-w-none">
          {parse(post.source, {
            replace: (domNode: any) => {
              if (
                domNode.name === "pre" &&
                domNode.children?.[0]?.name === "code"
              ) {
                const codeContent =
                  domNode.children[0].children?.[0]?.data || "";
                const className =
                  domNode.children[0].attribs?.class || "";
                const languageMatch = className.match(/language-(\w+)/);
                const language = languageMatch ? languageMatch[1] : "javascript";

                return <CodeBlock code={codeContent} language={language} />;
              }
            },
          })}
        </article>

        <div className="mt-16">
          <GiscusComments />
        </div>
      </section>
    </>
  );
}
