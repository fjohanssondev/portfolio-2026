import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/animations/fade-in";
import { TechBox } from "@/components/tech-box";
import {
  SiGithub,
  SiLinkedin,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import { CurrentlyPlaying } from "@/components/currently-playing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseCard } from "@/components/cases/case-card";
import { getCases } from "@/lib/cases";

export default async function LandingPage() {
  const cases = await getCases();

  return (
    <main>
      <Container>
        <section className="mt-12 md:mt-24">
          <div className="flex flex-col space-y-4 items-center">
            <FadeIn>
              <Badge variant="outline" className="gap-2 bg-background/50">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-brand" />
                </span>
                Software Engineer · Sundsvall, Sweden
              </Badge>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="text-center text-4xl md:text-6xl max-w-3xl text-balance">
                Turning good ideas into{" "}
                <span className="text-brand">
                  well-crafted
                </span>{" "}
                software.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm md:text-base leading-relaxed text-center text-muted-foreground max-w-sm md:max-w-xl">
                Hi, my name is Fredrik. A Software Engineer from Sweden. You can
                find my projects on my{" "}
                <Link className="underline decoration-brand underline-offset-4 text-foreground hover:text-brand transition-colors" target="_blank" href="https://github.com/fjohanssondev">
                  GitHub
                </Link>
                . You can also contact me on any of my socials.
              </p>
            </FadeIn>
            <div className="mt-6">
              <FadeIn className="flex space-x-2" delay={0.15}>
                <Button size="lg" asChild>
                  <Link href="/cv">Read my CV</Link>
                </Button>
                <Button size="icon-lg" variant="secondary" asChild>
                  <Link
                    href="https://github.com/fjohanssondev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <SiGithub />
                  </Link>
                </Button>
                <Button size="icon-lg" variant="secondary" asChild>
                  <Link
                    href="https://www.linkedin.com/in/fjohanssonn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <SiLinkedin />
                  </Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </section>
        <section className="mt-24">
          <FadeIn delay={0.2}>
            <CurrentlyPlaying />
          </FadeIn>
        </section>
        <section className="mt-4">
          <FadeIn delay={0.25}>
            <div className="relative w-full rounded-lg overflow-hidden">
              <Image
                loading="eager"
                width={1400}
                height={784}
                src="/hero.png"
                alt="VS Code showing the code that loads the cases on this site"
              />
            </div>
          </FadeIn>
        </section>
        <section className="mt-12 md:mt-24">
          <FadeIn>
            <div className="flex justify-between items-end">
              <h2 className="text-2xl font-medium">Selected work</h2>
              <Link
                href="/cases"
                className="text-sm text-muted-foreground hover:underline hover:text-foreground"
              >
                All cases
              </Link>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 mt-6">
            {cases.slice(0, 2).map((caseStudy, index) => (
              <FadeIn key={caseStudy.slug} delay={index * 0.08}>
                <CaseCard {...caseStudy} />
              </FadeIn>
            ))}
          </div>
        </section>
        <section className="mt-24">
          <FadeIn>
            <h3 className="text-2xl font-medium">Stack</h3>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="text-sm text-muted-foreground mt-1">
              Here&apos;s a few of the technologies I like to use when building
              software.
            </p>
          </FadeIn>
          <div className="mt-10">
            <div className="grid grid-cols-2 gap-8">
              <FadeIn delay={0.05}>
                <TechBox
                  icon={<SiNextdotjs size={24} />}
                  name="NextJS"
                  description="React Framework"
                />
              </FadeIn>
              <FadeIn delay={0.05}>
                <TechBox
                  icon={<SiPrisma size={24} />}
                  name="Prisma"
                  description="ORM"
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <TechBox
                  icon={<SiTypescript size={24} />}
                  name="Typescript"
                  description="Typesafe language"
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <TechBox
                  icon={<SiNodedotjs size={24} />}
                  name="NodeJS"
                  description="Javascript Runtime"
                />
              </FadeIn>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
