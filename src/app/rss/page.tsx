import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Header } from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "RSS Feed",
  description: "Subscribe to my RSS feed to get the latest updates.",
};

export default function RSSPage() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <Header />
      <Breadcrumbs />
      <section className="px-8 sm:px-0 sm:max-w-2xl pb-8">
        <h1 className="font-bold text-3xl mb-8">
          RSS Feed
        </h1>
        <article className="prose max-w-none">
          <p>
            If you&apos;d like to stay up-to-date with my latest blog posts, you can subscribe to my RSS feed. RSS (Really Simple Syndication) is a web feed that allows users and applications to access updates to websites in a standardized, computer-readable format.
          </p>
          <h2 className="text-2xl font-bold">
            How to Subscribe
          </h2>
          <p>
            To subscribe to my RSS feed, you&apos;ll need an RSS reader. There are many free and paid options available for all platforms. Here are a few popular choices:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <Link href="https://feedly.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Feedly
              </Link>
            </li>
            <li>
              <Link href="https://theoldreader.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                The Old Reader
              </Link>
            </li>
            <li>
              <Link href="https://netnewswire.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                NetNewsWire
              </Link> (for Apple devices)
            </li>
          </ul>
          <p>
            Once you have an RSS reader, you can subscribe to my feed by adding the following URL:
          </p>
          <div className="bg-foreground p-4 rounded-lg">
            <Link href="/blog/rss.xml" className="text-background hover:underline">
              https://daniilo.dev/blog/rss.xml
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
