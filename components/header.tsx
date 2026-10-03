import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center h-18">
      <Container className="flex items-center justify-between">
        <Link className="font-semibold" href="/">
          fjohansson.dev
        </Link>
        <nav>
          <ul className="flex text-sm md:text-base space-x-6 md:space-x-8">
            <li>
              <Link className="hover:text-brand transition-colors" href="/cases">
                Cases
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand transition-colors" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Button asChild>
          <Link href="/cv">Read my CV</Link>
        </Button>
      </Container>
    </header>
  );
}
