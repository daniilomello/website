import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  category: string;
  language: string;
  image?: string;
  draft?: boolean;
};

function getContentDirectory() {
  return path.join(process.cwd(), "content");
}

function getMdxFiles() {
  const dir = getContentDirectory();
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx" || path.extname(file) === ".md");
}

function readMdxFile(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf-8");
  return matter(raw);
}

async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "one-dark-pro",
      keepBackground: true,
    })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}

function getMdxData(dir: string) {
  const mdxFiles = getMdxFiles();
  return mdxFiles.map((file) => {
    const { data, content } = readMdxFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      slug,
      metadata: data as Metadata,
      content,
    };
  });
}

function parseMetadata(data: Record<string, unknown>): Metadata {
  return {
    title: data.title as string,
    publishedAt: data.publishedAt as string,
    summary: (data.summary as string) || "",
    image: (data.image as string) || undefined,
    language: (data.language as string) || "🇺🇸",
    category: (data.category as string) || "notes",
    draft: (data.draft as boolean) || false,
  };
}

export async function getPost(slug: string) {
  const dir = getContentDirectory();
  const mdxFile = getMdxFiles().find(
    (file) => path.basename(file, path.extname(file)) === slug
  );

  if (!mdxFile) return null;

  const { data, content } = readMdxFile(path.join(dir, mdxFile));
  const source = await markdownToHtml(content);

  return {
    slug,
    metadata: parseMetadata(data),
    source,
  };
}

export async function getBlogPosts() {
  const dir = getContentDirectory();
  const posts = getMdxData(dir);

  return posts
    .map((post) => ({
      slug: post.slug,
      metadata: parseMetadata(post.metadata as unknown as Record<string, unknown>),
      content: post.content,
    }))
    .filter((post) => !post.metadata.draft);
}

export async function getDraftPosts() {
  const dir = getContentDirectory();
  const posts = getMdxData(dir);

  return posts
    .map((post) => ({
      slug: post.slug,
      metadata: parseMetadata(post.metadata as unknown as Record<string, unknown>),
      content: post.content,
    }))
    .filter((post) => post.metadata.draft);
}

export async function getDraftPost(slug: string) {
  const post = await getPost(slug);
  if (!post || !post.metadata.draft) return null;
  return post;
}
