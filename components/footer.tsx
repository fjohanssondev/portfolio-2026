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
            <Link href="https://github.com/fjohanssondev" target="_blank">
              <SiGithub size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/fjohanssonn" target="_blank">
              <SiLinkedin size={20} />
            </Link>
          </div>
          <a
            className="text-sm underline mt-6"
            href="mailto:hello@fjohansson.dev"
          >
            hello@fjohansson.dev
          </a>
        </div>
        <nav className="flex-1">
          <span className="text-base font-medium">Menu</span>
          <ul className="flex flex-col text-sm space-y-3 mt-3">
            <li>
              <Link className="hover:text-brand transition-colors" href="/cases">
                Cases
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand transition-colors" href="/cv">
                CV
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand transition-colors" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
