import fs from "node:fs/promises";
import path from "node:path";

export interface CaseMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  url?: string;
}

export interface Case {
  slug: string;
  metadata: CaseMetadata;
}

const CASES_DIR = path.join(process.cwd(), "content/cases");

export async function getCaseSlugs() {
  const files = await fs.readdir(CASES_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getCase(slug: string) {
  const mod = await import(`@/content/cases/${slug}.mdx`);
  return {
    slug,
    metadata: mod.metadata as CaseMetadata,
    Content: mod.default as React.ComponentType,
  };
}

export async function getCases(): Promise<Case[]> {
  const slugs = await getCaseSlugs();
  const cases = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await getCase(slug);
      return { slug, metadata };
    }),
  );
  return cases.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
  );
}
