import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  Leaf,
  Building2,
  Sparkles,
  ClipboardList,
  Factory,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { ContactForm } from "@/components/shared/contact-form";

const services = [
  {
    icon: "/icon-tercerizacao.png",
    title: "Terceirização de Serviços",
    description:
      "Gestão e execução de serviços terceirizados com equipe qualificada, garantindo organização, eficiência e padronização das atividades.",
  },
  {
    icon: "/icon-jardinagem.png",
    title: "Jardinagem",
    description:
      "Serviços de corte, poda, plantio e manutenção de jardins residenciais e empresariais.",
  },
  {
    icon: "/icon-condos.png",
    title: "Manutenção de Condomínios",
    description:
      "Serviços de manutenção preventiva e corretiva para condomínios residenciais e comerciais, assegurando conservação das estruturas, bom funcionamento das instalações e valorização do patrimônio.",
  },
  {
    icon: "/icon-limpeza.png",
    title: "Limpeza de Áreas",
    description: "Limpeza especializada de áreas externas e internas.",
  },
  {
    icon: "/icon-servicos.png",
    title: "Gestão de Serviços",
    description:
      "Gestão e acompanhamento de serviços com equipe especializada, do planejamento à conclusão.",
  },
  {
    icon: "/icon-industriais.png",
    title: "Serviços Industriais",
    description:
      "Manutenção especializada de parques e áreas industriais, com foco na conservação das áreas externas.",
  },
];

const features = [
  "Profissionais treinados e qualificados",
  "Equipamentos modernos e eficientes",
  "Atendimento personalizado às necessidades do cliente",
  "Produtos de alta qualidade e ecologicamente corretos",
  "Comprometimento com prazos e resultados",
  "Experiência em diversos segmentos",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative py-16 lg:py-24 min-h-screen">
        <div className="absolute inset-0">
          <video autoPlay muted className="w-full h-full object-cover">
            <source src="/bg-hero-home.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container px-4 z-10 absolute top-1/2 -translate-y-1/2 left-0 right-0 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-semibold text-secondary-foreground leading-tight text-balance">
                Serviços especializados para condomínios e indústrias
              </h1>
              <p className="text-lg 2xl:text-2xl text-secondary-foreground max-w-lg leading-relaxed">
                Terceirização, jardinagem, limpeza, manutenção e facilities para
                condomínios e indústrias na cidade de Indaiatuba e região
                metropolitana de Campinas.
              </p>
              <Button size="lg" variant={"secondary"} className="text-xl">
                Solicitar orçamento
              </Button>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 lg:py-24 lg:-mt-48 z-10 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border border-border/50 bg-background rounded-sm hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-start">
                    <Image
                      src={service.icon}
                      width={80}
                      height={80}
                      alt={service.title}
                    />
                  </div>
                  <h3 className="text-lg lg:text-2xl font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Sobre a All Clean Job
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A All Clean Job é uma empresa especializada em serviços
                especializados em terceirização, jardinagem para condomínios e
                indústrias e facilities, comprometida com a excelência e
                satisfação dos clientes.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Contamos com uma equipe qualificada e utilizamos produtos de
                alta qualidade para garantir ambientes limpos, organizados e
                saudáveis para nossos clientes residenciais e empresariais.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <CheckCircle className="w-6 h-6 text-[#C7C95C] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" variant={"secondary"} className="text-lg mt-8">
                Entrar em contato
              </Button>
            </div>
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/image-about-home.png"
                alt="Profissional de jardinagem"
                width={536}
                height={700}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-0 items-center px-8 lg:px-24">
          <Image
            src="/image-pillars-home.png"
            alt="Jardinagem profissional"
            width={1088}
            height={741}
          />
          <div className="space-y-8">
            <Card className="xl:max-w-lg 2xl:max-w-2xl bg-primary rounded-sm text-secondary lg:p-8 border-0 xl:-ml-32">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl lg:text-2xl 2xl:text-4xl font-semibold">
                  Nossa Visão
                </h3>
                <p className="leading-relaxed text-base 2xl:text-lg">
                  Ser reconhecida como referência em serviços de limpeza
                  profissional, expandindo nossa atuação e mantendo os mais
                  altos padrões de qualidade e eficiência.
                </p>
              </CardContent>
            </Card>
            <Card className="xl:max-w-lg 2xl:max-w-2xl bg-secondary text-primary rounded-sm border-0 lg:p-8 xl:-ml-64">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl lg:text-2xl 2xl:text-4xl font-semibold">
                  Nossa Missão
                </h3>
                <p className="leading-relaxed text-base 2xl:text-lg">
                  Proporcionar serviços de limpeza de alta qualidade,
                  contribuindo para ambientes mais saudáveis e agradáveis, com
                  compromisso com a satisfação do cliente, responsabilidade
                  social e ambiental.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contato"
        className="py-16 lg:py-24 from-secondary via-slate-300 to-primary bg-linear-to-br"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 text-secondary-foreground">
              <div>
                <h2 className="text-3xl font-bold mb-2">Entre em Contato</h2>
                <p className="text-lg lg:text-2xl max-w-md">
                  Solicite um orçamento ou tire suas dúvidas sobre nossos
                  serviços de terceirização, jardinagem e manutenção para
                  condomínios e indústrias.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl text-secondary-foreground">
                  Informações de Contato
                </h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-3 ">
                    <Phone className="w-5 h-5 text-secondary-foreground" />
                    <span>(19) 98326-7315</span>
                  </li>
                  <li className="flex items-center gap-3 ">
                    <Mail className="w-5 h-5 text-secondary-foreground" />
                    <span>contato@allcleanjob.com.br</span>
                  </li>
                  <li className="flex items-start gap-3 ">
                    <MapPin className="w-5 h-5 text-secondary-foreground shrink-0" />
                    <span>
                      Indaiatuba - SP
                      <br />
                      Região Metropolitana de Campinas
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-xl">
                  Horário de Atendimento
                </h3>
                <div className="space-y-1 text-lg">
                  <p className="flex items-center gap-2">
                    <span>
                      <strong>Segunda - Sexta:</strong>
                      <br />
                      08:00 - 18:00
                    </span>
                  </p>
                  <p>
                    <strong>Sábado:</strong>
                    <br />
                    08:00 - 12:00
                  </p>
                  <p>
                    <strong>Domingo:</strong>
                    <br />
                    Fechado
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
