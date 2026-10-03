import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { getCase, getCaseSlugs } from "@/lib/cases";

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getCaseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getCase(slug);
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const { metadata, Content } = await getCase(slug);

  return (
    <main>
      <Container className="flex flex-col mt-12 md:mt-24 max-w-3xl">
        <Link
          href="/cases"
          className="text-sm text-muted-foreground hover:underline"
        >
          <span className="text-brand">&#47;&#47;</span> Cases
        </Link>
        <h1 className="text-4xl mt-1">{metadata.title}</h1>
        <p className="text-muted-foreground mt-2">{metadata.description}</p>
        <div className="flex flex-wrap items-center gap-2 mt-4">
          {metadata.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
          {metadata.url && (
            <Link
              href={metadata.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline ml-auto"
            >
              Visit site
            </Link>
          )}
        </div>
        <article className="mt-8">
          <Content />
        </article>
      </Container>
    </main>
  );
}
