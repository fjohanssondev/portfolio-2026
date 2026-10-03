import { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/animations/fade-in";
import { certificates, education, experiences } from "@/lib/cv";

export const metadata: Metadata = {
  title: "CV",
  description: "My experience, education and certificates.",
};

export default function CVPage() {
  return (
    <main>
      <Container className="flex flex-col mt-12 md:mt-24">
        <span className="text-sm text-muted-foreground"><span className="text-brand">&#47;&#47;</span> CV</span>
        <h1 className="text-4xl">Curriculum vitae</h1>
        <p className="text-muted-foreground mt-2 max-w-xl">
          Software Engineer based in Sundsvall, Sweden, with a background in
          learning design and a passion for building for the web.
        </p>
        <section className="mt-12">
          <FadeIn>
            <h2 className="text-2xl font-medium">Experience</h2>
          </FadeIn>
          <div className="space-y-8 mt-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="text-muted-foreground border-l border-brand/40 pl-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col space-y-1">
                    <FadeIn>
                      <p className="flex text-sm space-x-2 items-center">
                        <MapPin size={18} strokeWidth={1.5} />
                        <span>{exp.location}</span>
                      </p>
                    </FadeIn>
                    <FadeIn delay={0.04}>
                      <h3 className="font-medium text-foreground mt-1">
                        {exp.company}
                      </h3>
                    </FadeIn>
                    <FadeIn delay={0.08}>
                      <p className="text-sm">{exp.role}</p>
                    </FadeIn>
                  </div>
                  <div>
                    <FadeIn delay={0.08}>
                      <p className="text-sm">{exp.period}</p>
                    </FadeIn>
                  </div>
                </div>
                <ul className="list-disc pl-4 mt-4 space-y-2 text-sm">
                  {exp.achievements.map((achievement, i) => (
                    <FadeIn delay={0.1 + i * 0.04} key={i}>
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
                className="text-muted-foreground border-l border-brand/40 pl-4"
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
                className="text-muted-foreground border-l border-brand/40 pl-4"
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
      </Container>
    </main>
  );
}
