import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { CurrentTime } from "@/components/current-time";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in contact with me.",
};

export default function ContactPage() {
  return (
    <main>
      <Container className="flex flex-col mt-12 md:mt-24">
        <span className="text-sm text-muted-foreground">
          &#47;&#47; Contact
        </span>
        <h1 className="text-4xl mb-8">Let&apos;s talk</h1>
        <section className="flex flex-col md:flex-row space-y-12 md:space-y-0">
          <div className="flex-1 border-l pl-4">
            <p>
              Time for me: <CurrentTime />
            </p>
            <div className="mt-6">
              <h2 className="font-medium">Email</h2>
              <p className="text-muted-foreground mt-1">hello@fjohansson.dev</p>
            </div>
            <div className="mt-6">
              <h2 className="font-medium">Socials</h2>
              <div className="flex flex-col">
                <Link
                  href="https://www.linkedin.com/in/fjohanssonn/"
                  className="text-muted-foreground hover:underline hover:text-foreground mt-1"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/fjohanssondev"
                  className="text-muted-foreground hover:underline hover:text-foreground mt-1"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </section>
      </Container>
    </main>
  );
}
