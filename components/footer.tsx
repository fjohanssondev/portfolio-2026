import { Container } from "@/components/container";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-secondary py-12 mt-24">
      <Container className="flex">
        <div className="flex flex-1 flex-col space-y-4">
          <div>
            <span className="text-lg font-semibold">fjohansson.dev</span>
            <p className="text-sm text-muted-foreground mt-1">
              Software Engineer from the northern regions of Sweden.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="/">
              <SiGithub size={20} />
            </Link>
            <Link href="/">
              <SiLinkedin size={20} />
            </Link>
          </div>
          <a
            className="text-sm underline mt-6"
            href="mailto:hey@fjohansson.dev"
          >
            hey@fjohansson.dev
          </a>
        </div>
        <ul className="flex-1">
          <ul className="flex flex-col text-sm space-y-3">
            <span className="text-base font-medium">Menu</span>
            <li>
              <Link className="hover:underline" href="/cases">
                Cases
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/blog">
                GitHub
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/blog">
                Contact
              </Link>
            </li>
          </ul>
        </ul>
      </Container>
    </footer>
  );
}
