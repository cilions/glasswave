import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMDXComponents } from "@/components/docs/mdx-components";
import * as previews from "@/components/previews";

const contentDir = path.join(process.cwd(), "content");

function getContentPath(slug: string[]): string | null {
  const candidates = [
    path.join(contentDir, ...slug) + ".mdx",
    path.join(contentDir, ...slug, "index.mdx"),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

export async function generateStaticParams() {
  const results: { slug: string[] }[] = [];

  function walk(dir: string, base: string[] = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), [...base, entry.name]);
      } else if (entry.name.endsWith(".mdx")) {
        results.push({
          slug: [...base, entry.name.replace(/\.mdx$/, "")],
        });
      }
    }
  }

  walk(contentDir);
  return results;
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const filePath = getContentPath(slug);
  if (!filePath) notFound();

  const source = fs.readFileSync(filePath, "utf-8");

  const mdxComponents = getMDXComponents();
  const { ComponentsList } = await import("@/components/components-list");

  // Merge components so MDX can use them
  const components = { ...mdxComponents, ...previews, ComponentsList };

  return (
    <article className="prose-invert min-w-0">
      <MDXRemote source={source} components={components} />
    </article>
  );
}
