import { Header } from "@/components/Header";
import { getDraftPosts } from "@/data/blog";
import { cn } from "@/lib/utils";
import Link from "next/link";

const categoriesColors: Record<string, string> = {
  career: "text-pink-400",
  code: "text-indigo-400",
  notes: "text-fuchsia-600",
  product: "text-sky-400",
};

export default async function DraftsPage() {
  const posts = await getDraftPosts();

  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <>
      <Header />
      <section className="px-8 sm:px-0">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="font-title font-bold text-2xl text-foreground">
            Drafts
          </h1>
          <span className="text-xs bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-2 py-0.5 rounded-full font-medium">
            Not indexed
          </span>
        </div>
        <p className="mb-8 text-sm text-muted-foreground">
          These posts are drafts and are not visible to the public or search
          engines.
        </p>

        <div className="flex flex-col gap-3">
          {sortedPosts.length === 0 ? (
            <p className="text-muted-foreground">
              No drafts yet. Add{" "}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                draft: true
              </code>{" "}
              to a post&apos;s frontmatter to mark it as a draft.
            </p>
          ) : (
            sortedPosts.map((post) => (
              <div key={post.slug}>
                <Link
                  href={`/draft/${post.slug}`}
                  className="hover:text-purple-500 transition text-lg"
                >
                  <strong className="flex items-center justify-between">
                    <span>
                      {post.metadata.language} &nbsp; {post.metadata.title}
                    </span>
                    <span className="hidden sm:flex text-[10px] gap-2 items-center">
                      <span
                        className={cn(
                          "rounded-full",
                          categoriesColors[post.metadata.category]
                        )}
                      >
                        {post.metadata.category}
                      </span>
                      &bull;
                      <span className="text-yellow-600 dark:text-yellow-400">
                        draft
                      </span>
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
