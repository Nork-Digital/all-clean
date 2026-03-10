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
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const services = [
  {
    icon: Users,
    title: "Terceirização de Serviços",
    description:
      "Gestão e execução de serviços terceirizados com equipe qualificada, garantindo organização, eficiência e padronização das atividades.",
  },
  {
    icon: Leaf,
    title: "Jardinagem",
    description:
      "Serviços de corte, poda, plantio e manutenção de jardins residenciais e empresariais.",
  },
  {
    icon: Building2,
    title: "Manutenção de Condomínios",
    description:
      "Serviços de manutenção preventiva e corretiva para condomínios residenciais e comerciais, assegurando conservação das estruturas, bom funcionamento das instalações e valorização do patrimônio.",
  },
  {
    icon: Sparkles,
    title: "Limpeza de Áreas",
    description: "Limpeza especializada de áreas externas e internas.",
  },
  {
    icon: ClipboardList,
    title: "Gestão de Serviços",
    description:
      "Gestão e acompanhamento de serviços com equipe especializada, do planejamento à conclusão.",
  },
  {
    icon: Factory,
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
      <section
        id="inicio"
        className="relative bg-linear-to-br from-blue-50/50 to-background py-16 lg:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                Serviços especializados para condomínios e indústrias
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Terceirização, jardinagem, limpeza, manutenção e facilities para
                condomínios e indústrias na cidade de Indaiatuba e região
                metropolitana de Campinas.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Solicitar orçamento
              </Button>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border border-border/50 bg-background hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Sobre a All Clean Job
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A All Clean Job é uma empresa especializada em serviços
                especializados em terceirização, jardinagem para condomínios e
                indústrias e facilities, comprometida com a excelência e
                satisfação dos clientes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
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
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Entrar em contato
              </Button>
            </div>
            <div className="relative h-80 lg:h-120 rounded-xl overflow-hidden">
              <Image
                src=""
                alt="Profissional de jardinagem"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src=""
            alt="Jardinagem profissional"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 to-slate-900/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row lg:justify-end lg:items-center gap-6 lg:gap-8">
            <Card className="max-w-md bg-primary/95 border-0">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary-foreground">
                  Nossa Visão
                </h3>
                <p className="text-sm text-primary-foreground/90 leading-relaxed">
                  Ser reconhecida como referência em serviços de limpeza
                  profissional, expandindo nossa atuação e mantendo os mais
                  altos padrões de qualidade e eficiência.
                </p>
              </CardContent>
            </Card>
            <Card className="max-w-md bg-background/95 border-0">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">
                  Nossa Missão
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
      <section id="contato" className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Entre em Contato
                </h2>
                <p className="text-muted-foreground">
                  Solicite um orçamento ou tire suas dúvidas sobre nossos
                  serviços de terceirização, jardinagem e manutenção para
                  condomínios e indústrias.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-primary">
                  Informações de Contato
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>(19) 98326-7315</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>contato@allcleanjob.com.br</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>
                      Indaiatuba - SP
                      <br />
                      Região Metropolitana de Campinas
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">
                  Horário de Atendimento
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>
                      <strong>Segunda - Sexta:</strong> 08:00 - 18:00
                    </span>
                  </p>
                  <p className="pl-6">
                    <strong>Sábado:</strong> 08:00 - 12:00
                  </p>
                  <p className="pl-6">
                    <strong>Domingo:</strong> Fechado
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-background border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Nome completo
                  </label>
                  <Input placeholder="Seu nome" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Telefone
                    </label>
                    <Input type="tel" placeholder="(00) 00000-0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Serviço de Interesse
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um Serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="terceirizacao">
                        Terceirização de Serviços
                      </SelectItem>
                      <SelectItem value="jardinagem">Jardinagem</SelectItem>
                      <SelectItem value="manutencao">
                        Manutenção de Condomínios
                      </SelectItem>
                      <SelectItem value="limpeza">Limpeza de Áreas</SelectItem>
                      <SelectItem value="gestao">Gestão de Serviços</SelectItem>
                      <SelectItem value="industrial">
                        Serviços Industriais
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Mensagem
                  </label>
                  <Textarea placeholder="Descreva sua necessidade" rows={4} />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <Button className="bg-primary hover:bg-primary/90">
                    Enviar mensagem
                  </Button>
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <FaFacebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
