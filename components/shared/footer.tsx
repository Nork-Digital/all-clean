import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-border/40 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={"/logo-footer.png"}
                width={398}
                height={232}
                alt="Logo Footer"
                className="max-w-68"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Serviços especializados em terceirização, jardinagem para
              condomínios e indústrias e facilities em Indaiatuba e região.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="text-secondary-foreground hover:text-primary transition-colors"
              >
                <FaFacebook size={25} />
              </Link>
              <Link
                href="#"
                className="text-secondary-foreground hover:text-primary transition-colors"
              >
                <FaInstagram size={25} />
              </Link>
            </div>
          </div>

          {/* Nossos Serviços */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary-foreground">
              Nossos Serviços
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#servicos"
                  className="hover:text-foreground transition-colors"
                >
                  Terceirização de Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="hover:text-foreground transition-colors"
                >
                  Jardinagem
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="hover:text-foreground transition-colors"
                >
                  Manutenção de Condomínios
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="hover:text-foreground transition-colors"
                >
                  Limpeza de Áreas
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="hover:text-foreground transition-colors"
                >
                  Gestão de Serviços
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary-foreground">
              Links Úteis
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#inicio"
                  className="hover:text-foreground transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="hover:text-foreground transition-colors"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="hover:text-foreground transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="hover:text-foreground transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary-foreground">
              Informações de Contato
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone size={25} className="text-secondary-foreground" />
                <Link
                  href="tel:+5519983267315"
                  target="_blank"
                  className="hover:underline"
                >
                  (19) 98326-7315
                </Link>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={25} className="text-secondary-foreground" />
                <Link
                  href="mailto:contato@allcleanjob.com.br"
                  target="_blank"
                  className="hover:underline"
                >
                  contato@allcleanjob.com.br
                </Link>
              </li>

              <li className="flex items-start gap-2">
                <MapPin
                  size={25}
                  className="text-secondary-foreground mt-0.5"
                />
                <Link
                  href="https://maps.google.com/?q=Indaiatuba+SP"
                  target="_blank"
                  className="hover:underline"
                >
                  <span>
                    Indaiatuba - SP
                    <br />
                    Região Metropolitana de Campinas
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
