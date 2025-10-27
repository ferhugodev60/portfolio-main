import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveUp } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

export default function Footer() {
  return (
    <footer className="bg-card">
      <Section className="py-8">
        <div className="flex justify-between">
          <p className="text-muted-foreground text-sm">
            @Copyright 2025 - Hugo Ferreira
          </p>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <MoveUp size={15} className="text-foreground" />
          </Link>
        </div>
      </Section>
    </footer>
  );
}
