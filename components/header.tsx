import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="py-5">
      <Container className="flex items-center justify-between">
        <Link className="font-semibold" href="/">
          fjohansson.dev
        </Link>
        <nav>
          <ul className="flex text-sm md:text-base space-x-6 md:space-x-8">
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
        </nav>
        <Button>Download CV</Button>
      </Container>
    </header>
  );
}
