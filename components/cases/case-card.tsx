import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Case } from "@/lib/cases";

export function CaseCard({ slug, metadata }: Case) {
  return (
    <Link href={`/cases/${slug}`} className="group flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-secondary transition-colors group-hover:border-brand/60">
        <Image
          src={metadata.image}
          alt={metadata.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <h2 className="font-medium flex items-center gap-1 transition-colors group-hover:text-brand">
          {metadata.title}
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </h2>
        <span className="text-sm text-muted-foreground">
          {new Date(metadata.date).getFullYear()}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mt-1">
        {metadata.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        {metadata.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
