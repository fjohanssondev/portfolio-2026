import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="text-2xl font-medium mt-12 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-medium mt-8 mb-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-muted-foreground leading-relaxed mt-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-4 mt-4 space-y-2 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-4 mt-4 space-y-2 text-muted-foreground">
      {children}
    </ol>
  ),
  a: ({ href = "", children }) => (
    <Link className="underline decoration-brand underline-offset-4 text-foreground hover:text-brand transition-colors" href={href}>
      {children}
    </Link>
  ),
  strong: ({ children }) => (
    <strong className="font-medium text-foreground">{children}</strong>
  ),
  code: ({ children }) => (
    <code className="rounded bg-muted px-1 py-0.5 text-sm">{children}</code>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l border-brand/40 pl-4 mt-4 italic">
      {children}
    </blockquote>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
