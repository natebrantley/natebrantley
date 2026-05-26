import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const siteUrl = "https://natebrantley.com";

export type Topic = "business" | "trading-cards" | "stocks" | "real-estate";

export interface Post {
  slug: string;
  title: string;
  description: string;
  topic: Topic;
  publishedAt: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  content: string[];
}

export const topicMeta: Record<Topic, { label: string; description: string }> = {
  business: {
    label: "Business",
    description: "Owner mindset, systems, and lessons from building in public.",
  },
  "trading-cards": {
    label: "Trading Cards",
    description: "Collector notes, hobby trends, and card-market breakdowns.",
  },
  stocks: {
    label: "Stocks",
    description: "Frameworks, theses, and market observations from an operator lens.",
  },
  "real-estate": {
    label: "Real Estate",
    description: "Pacific Northwest market context and practical playbooks.",
  },
};

interface PostFrontmatter {
  title: string;
  description: string;
  topic: Topic;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  tags?: string[];
}

const contentDirectory = path.join(process.cwd(), "content", "writing");

function isTopic(value: unknown): value is Topic {
  return typeof value === "string" && value in topicMeta;
}

function toParagraphs(content: string): string[] {
  return content
    .split(/\r?\n\r?\n/g)
    .map((paragraph) => paragraph.replace(/\r?\n/g, " ").trim())
    .filter(Boolean);
}

function validateFrontmatter(data: unknown, slug: string): PostFrontmatter {
  if (!data || typeof data !== "object") {
    throw new Error(`Invalid frontmatter in ${slug}.mdx`);
  }

  const frontmatter = data as Record<string, unknown>;

  if (
    typeof frontmatter.title !== "string" ||
    typeof frontmatter.description !== "string" ||
    typeof frontmatter.publishedAt !== "string" ||
    typeof frontmatter.readTime !== "string" ||
    !isTopic(frontmatter.topic)
  ) {
    throw new Error(`Missing required frontmatter fields in ${slug}.mdx`);
  }

  const tags =
    Array.isArray(frontmatter.tags) && frontmatter.tags.every((item) => typeof item === "string")
      ? frontmatter.tags
      : [];

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    topic: frontmatter.topic,
    publishedAt: frontmatter.publishedAt,
    readTime: frontmatter.readTime,
    featured: Boolean(frontmatter.featured),
    tags,
  };
}

function readPostsFromMdx(): Post[] {
  const filenames = fs
    .readdirSync(contentDirectory)
    .filter((filename) => filename.endsWith(".mdx"));

  return filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(contentDirectory, filename);
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);
    const frontmatter = validateFrontmatter(data, slug);

    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      topic: frontmatter.topic,
      publishedAt: frontmatter.publishedAt,
      readTime: frontmatter.readTime,
      featured: frontmatter.featured ?? false,
      tags: frontmatter.tags ?? [],
      content: toParagraphs(content),
    };
  });
}

export function getAllPosts(): Post[] {
  return readPostsFromMdx().sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getFeaturedPosts(limit = 3): Post[] {
  return getAllPosts()
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function getPostBySlug(slug: string): Post | undefined {
  return readPostsFromMdx().find((post) => post.slug === slug);
}

export function getPostsByTopic(topic: Topic): Post[] {
  return getAllPosts().filter((post) => post.topic === topic);
}

export function getTopics(): Topic[] {
  return Object.keys(topicMeta) as Topic[];
}

export function formatPostDate(value: string): string {
  return new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
