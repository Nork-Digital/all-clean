import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-border/40 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
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
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-foreground">
                  all <span className="text-primary">clean</span> job
                </span>
                <span className="text-xs text-muted-foreground">
                  SERVIÇOS E GESTÃO
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Serviços especializados em terceirização, jardinagem para
              condomínios e indústrias e facilities em Indaiatuba e região.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Nossos Serviços */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Nossos Serviços</h3>
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
            <h3 className="font-semibold text-foreground">Links Úteis</h3>
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
            <h3 className="font-semibold text-foreground">
              Informações de Contato
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>(19) 98326-7315</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>contato@allcleanjob.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>
                  Indaiatuba - SP
                  <br />
                  Região Metropolitana de Campinas
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} All Clean Job. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
