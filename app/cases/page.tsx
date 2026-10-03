import { Metadata } from "next";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/animations/fade-in";
import { CaseCard } from "@/components/cases/case-card";
import { getCases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Cases",
  description: "A selection of projects I've worked on.",
};

export default async function CasesPage() {
  const cases = await getCases();

  return (
    <main>
      <Container className="flex flex-col mt-12 md:mt-24">
        <span className="text-sm text-muted-foreground"><span className="text-brand">&#47;&#47;</span> Cases</span>
        <h1 className="text-4xl">Selected work</h1>
        <p className="text-muted-foreground mt-2 max-w-xl">
          Projects I&apos;ve built, from side projects to things used by real
          people every day.
        </p>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 mt-10">
          {cases.map((caseStudy, index) => (
            <FadeIn key={caseStudy.slug} delay={index * 0.08}>
              <CaseCard {...caseStudy} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </main>
  );
}
