import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "@/styles/globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terceirização e Facilities em Indaiatuba e Campinas | All Clean Job",
  description:
    "Serviços especializados de jardinagem, limpeza, manutenção e terceirização para condomínios e indústrias em Indaiatuba e região de Campinas. Solicite orçamento!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${figtree.className} antialiased`}>{children}</body>
    </html>
  );
}
