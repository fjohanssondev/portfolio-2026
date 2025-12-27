import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { HeartIcon } from "@/components/heart-icon";
import { FadeIn } from "@/components/animations/fade-in";
import { TechBox } from "@/components/tech-box";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

const experiences = [
  {
    location: "Sundsvall, Sweden",
    company: "Centrala Studiestödsnämnden",
    role: "Software Engineer",
    period: "Sep 2022 - Present",
    achievements: [
      "Highly involved in the development of our public-facing website and internal intranet platform",
      "Architected and built reusable component libraries that power our internal applications",
      "Established modern monorepo infrastructure with Storybook for seamless component development",
      "Tackling complex architectural challenges across our frontend ecosystem",
    ],
  },
  {
    location: "Sundsvall, Sweden",
    company: "Desco AB",
    role: "Co-Founder & CTO",
    period: "Jan 2023 - Present",
    achievements: [
      "Built the entire e-commerce platform that powers our brand from the ground up",
      "Lead all technical decisions and infrastructure architecture for the company",
      "Designed and deployed scalable infrastructure using Docker on VPS",
      "Developed full-stack application using the latest Next.js with modern best practices",
      "Established the technical foundation that enables our business to operate and scale",
    ],
  },
  {
    location: "Sundsvall, Sweden",
    company: "Telia Company AB",
    role: "Senior Learning Designer",
    period: "Apr 2015 - Sep 2022",
    achievements: [
      "Trained all new employees through comprehensive lectures and call monitoring sessions",
      "Developed training materials adopted as standard across all Telia office locations nationwide",
      "Conducted candidate interviews and made hiring decisions for the customer service team",
      "Established training frameworks that improved onboarding efficiency and consistency",
    ],
  },
];

const education = [
  {
    location: "Distance",
    institution: "Codecademy",
    title: "Full Stack Engineer Path",
    period: "2020 - 2022",
  },
];

const certificates = [
  {
    location: "Örebro, Sweden",
    institution: "SiteVision",
    title: "Certified SiteVision Solution Developer",
    year: "2023",
  },
];

export default function Page() {
  return (
    <main>
      <Container>
        <section className="mt-12 md:mt-24">
          <div className="flex flex-col space-y-4 items-center">
            <FadeIn duration={0.6} direction="left">
              <h1 className="flex items-center justify-center text-center text-4xl md:text-6xl gap-2">
                I <HeartIcon /> building software.
              </h1>
            </FadeIn>
            <FadeIn duration={0.8}>
              <p className="text-sm md:text-base leading-relaxed text-center text-muted-foreground max-w-sm md:max-w-lg">
                Hi, my name is Fredrik. A Software Engineer from Sweden. You can
                find my projects on my{" "}
                <Link className="underline text-foreground" href="">
                  GitHub
                </Link>
                . You can also contact me by email.
              </p>
            </FadeIn>
            <FadeIn duration={1}>
              <a
                className="text-sm md:text-base underline"
                href="mailto:hey@fjohansson.dev"
              >
                hey@fjohansson.dev
              </a>
            </FadeIn>
          </div>
        </section>
        <section className="mt-24">
          <FadeIn duration={1.2}>
            <div className="relative w-full h-140">
              <Image
                className="object-contain"
                fill
                src="/use-my-bio.png"
                alt="Code editor"
              />
            </div>
          </FadeIn>
        </section>
        <section className="mt-12 md:mt-24">
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-medium">Experience</h2>
          </FadeIn>
          <div className="space-y-8 mt-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="text-muted-foreground border-l border-[#363636] pl-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col space-y-1">
                    <FadeIn delay={0.1}>
                      <p className="flex text-sm space-x-2 items-center">
                        <MapPin size={18} strokeWidth={1.5} />
                        <span>{exp.location}</span>
                      </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                      <h3 className="font-medium text-foreground mt-1">
                        {exp.company}
                      </h3>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                      <p className="text-sm">{exp.role}</p>
                    </FadeIn>
                  </div>
                  <div>
                    <FadeIn direction="left" delay={0.4}>
                      <p className="text-sm">{exp.period}</p>
                    </FadeIn>
                  </div>
                </div>
                <ul className="list-disc pl-4 mt-4 space-y-2 text-sm">
                  {exp.achievements.map((achievement, i) => (
                    <FadeIn delay={0.1 + i / 5} key={i}>
                      <li>{achievement}</li>
                    </FadeIn>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-medium">Education</h2>
          <div className="space-y-8 mt-6">
            {education.map((exp, index) => (
              <div
                key={index}
                className="text-muted-foreground border-l border-[#363636] pl-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col space-y-1">
                    <p className="flex text-sm space-x-2 items-center">
                      <MapPin size={18} strokeWidth={1.5} />
                      <span>{exp.location}</span>
                    </p>
                    <h3 className="font-medium text-foreground mt-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm">{exp.institution}</p>
                  </div>
                  <div>
                    <p className="text-sm">{exp.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-medium">Certificates</h2>
          <div className="space-y-8 mt-6">
            {certificates.map((exp, index) => (
              <div
                key={index}
                className="text-muted-foreground border-l border-[#363636] pl-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col space-y-1">
                    <p className="flex text-sm space-x-2 items-center">
                      <MapPin size={18} strokeWidth={1.5} />
                      <span>{exp.location}</span>
                    </p>
                    <h3 className="font-medium text-foreground mt-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm">{exp.institution}</p>
                  </div>
                  <div>
                    <p className="text-sm">{exp.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-24">
          <FadeIn direction="left">
            <h3 className="text-2xl font-medium">Stack</h3>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm text-muted-foreground mt-1">
              Here&apos;s a few of the technologies I like to use when building
              software.
            </p>
          </FadeIn>
          <div className="mt-10">
            <div className="grid grid-cols-2 gap-8">
              <FadeIn delay={0.3}>
                <TechBox
                  icon={<SiNextdotjs size={24} />}
                  name="NextJS"
                  description="React Framework"
                />
              </FadeIn>
              <FadeIn delay={0.3}>
                <TechBox
                  icon={<SiPrisma size={24} />}
                  name="Prisma"
                  description="ORM"
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <TechBox
                  icon={<SiTypescript size={24} />}
                  name="Typescript"
                  description="Typesafe language"
                />
              </FadeIn>
              <FadeIn delay={0.2}>
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
