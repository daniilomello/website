process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; 

export async function getPost(slug: string) {
  const res = await fetch(
    `https://ghostwhite-starling-589299.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}`
  );
  if (!res.ok) {
    return null;
  }
  const posts = await res.json();
  if (!posts.length) return null;

  const post = posts[0];
  const tags = post._embedded?.["wp:term"]?.flat() || [];
  const languageTag = tags.find((tag: any) =>
    ["🇺🇸", "🇧🇷"].includes(tag.name)
  );

  return {
    slug: post.slug,
    metadata: {
      title: post.title.rendered,
      publishedAt: post.date,
      summary: post.excerpt.rendered,
      image:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || undefined,
      language: languageTag?.name || "🇺🇸",
    },
    source: post.content.rendered,
  };
}

export async function getBlogPosts() {
  const allPosts: any[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const res = await fetch(
      `https://ghostwhite-starling-589299.hostingersite.com/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`
    );

    // Interrompe se a página não existe
    if (res.status === 400 || res.status === 404) break;

    if (!res.ok) {
      throw new Error(`Failed to fetch posts on page ${page}`);
    }

    const posts = await res.json();

    if (posts.length === 0) break;

    allPosts.push(...posts);
    page++;
  }

  return allPosts.map((post: any) => {
    const tags = post._embedded?.["wp:term"]?.flat() || [];
    const languageTag = tags.find((tag: any) =>
      ["🇺🇸", "🇧🇷"].includes(tag.name)
    );

    const categories = post._embedded?.["wp:term"]?.flat()
      .filter((tag: any) => tag.taxonomy === "category")
      .map((tag: any) => tag.name);

    console.log(categories[0]);

    return {
      slug: post.slug,
      metadata: {
        title: post.title.rendered,
        publishedAt: post.date,
        category: categories[0],
        summary: post.excerpt.rendered,
        image:
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || undefined,
        language: languageTag?.name || "🇺🇸",
      },
      content: post.content.rendered,
    };
  });
}