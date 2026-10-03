import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { CurrentTime } from "@/components/current-time";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in contact with me.",
};

const links = [
  {
    label: "Email",
    value: "hello@fjohansson.dev",
    href: "mailto:hello@fjohansson.dev",
    icon: <Mail size={20} strokeWidth={1.5} />,
  },
  {
    label: "LinkedIn",
    value: "in/fjohanssonn",
    href: "https://www.linkedin.com/in/fjohanssonn",
    icon: <SiLinkedin size={18} />,
  },
  {
    label: "GitHub",
    value: "fjohanssondev",
    href: "https://github.com/fjohanssondev",
    icon: <SiGithub size={18} />,
  },
];

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center size-12 shrink-0 border border-border rounded transition-colors group-hover:border-brand/60 group-hover:text-brand">
      {children}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main>
      <Container className="flex flex-col mt-12 md:mt-24">
        <FadeIn>
          <span className="text-sm text-muted-foreground">
            <span className="text-brand">&#47;&#47;</span> Contact
          </span>
          <h1 className="text-4xl md:text-5xl">Let&apos;s talk</h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Have a project in mind, a question, or just want to say hi? Send me
            a message and I&apos;ll get back to you as soon as I can.
          </p>
        </FadeIn>
        <section className="grid md:grid-cols-[1fr_1.5fr] gap-12 mt-12">
          <FadeIn delay={0.05} className="flex flex-col space-y-6">
            {links.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center space-x-4"
                >
                  <IconBox>{link.icon}</IconBox>
                  <div className="flex flex-col space-y-1 min-w-0">
                    <span className="text-sm text-muted-foreground">
                      {link.label}
                    </span>
                    <span className="flex items-center gap-1 truncate transition-colors group-hover:text-brand">
                      {link.value}
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.5}
                        className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
            <div className="border-t border-border pt-6 flex flex-col space-y-6">
              <div className="flex items-center space-x-4">
                <IconBox>
                  <MapPin size={20} strokeWidth={1.5} />
                </IconBox>
                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-muted-foreground">Based in</span>
                  <span>Sundsvall, Sweden</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <IconBox>
                  <Clock size={20} strokeWidth={1.5} />
                </IconBox>
                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-muted-foreground">
                    Local time
                  </span>
                  <CurrentTime />
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-lg border border-border bg-card/40 p-6 md:p-8">
              <h2 className="text-xl font-medium">Send a message</h2>
              <p className="text-sm text-muted-foreground mt-1 mb-6">
                Goes straight to my inbox.
              </p>
              <ContactForm />
            </div>
          </FadeIn>
        </section>
      </Container>
    </main>
  );
}
