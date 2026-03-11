"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import Image from "next/image";
import { Menu } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-background/15 backdrop-blur supports-backdrop-filter:bg-background/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            width={276}
            height={51}
            alt="Logo All Clean"
            className="max-w-30 lg:max-w-full h-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#inicio"
            className="text-sm 2xl:text-base font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Início
          </Link>
          <Link
            href="#servicos"
            className="text-sm 2xl:text-base font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="#sobre"
            className="text-sm 2xl:text-base font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Sobre nós
          </Link>
          <Button asChild size="lg" className="2xl:text-base">
            <Link href="#contato">Contato</Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-6 text-primary" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav className="flex flex-col gap-6 mt-16 px-8">
              <Link
                href="#inicio"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Início
              </Link>
              <Link
                href="#servicos"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Serviços
              </Link>
              <Link
                href="#sobre"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Sobre nós
              </Link>
              <Button asChild size="sm">
                <Link href="#contato" onClick={() => setOpen(false)}>
                  Contato
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
