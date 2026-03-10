"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border/40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
              fill="#1E88E5"
            />
            <path
              d="M22 12c-1.5-2-4-3-6-3s-4.5 1-6 3c-1 1.5-1 3.5 0 5 1.5 2 4 3 6 3s4.5-1 6-3c1-1.5 1-3.5 0-5z"
              fill="#fff"
            />
            <path
              d="M12 16c0-2.2 1.8-4 4-4"
              stroke="#1E88E5"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xl font-semibold text-foreground">
            all <span className="text-primary">clean</span> job
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#inicio"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Início
          </Link>
          <Link
            href="#servicos"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="#sobre"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre nós
          </Link>
          <Button asChild size="sm">
            <Link href="#contato">Contato</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
