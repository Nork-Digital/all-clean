"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  servico: z.string({ error: "Selecione um serviço" }),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [success, setSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      servico: "",
      mensagem: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: FormValues) {
    const res = await fetch("/contact-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      setSuccess(true);
      form.reset();
    } else {
      form.setError("root", { message: "Erro ao enviar. Tente novamente." });
    }
  }

  return (
    <Card className="border-border/50 w-full lg:max-w-1/2 rounded-sm">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-bold">
                    Nome completo
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold">
                      Telefone
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="(00) 00000-0000"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="servico"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-bold">
                    Serviço de Interesse
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um Serviço" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded">
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
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mensagem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-bold">
                    Mensagem
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva sua necessidade"
                      className="rounded-sm"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.formState.errors.root && (
              <p className="text-sm text-destructive">
                {form.formState.errors.root.message}
              </p>
            )}

            {success && (
              <p className="text-sm text-green-600">
                Mensagem enviada com sucesso!
              </p>
            )}

            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between pt-2">
              <Button
                size="lg"
                variant="secondary"
                type="submit"
                disabled={isSubmitting}
                className="lg:text-lg"
              >
                {isSubmitting ? <Spinner className="mr-2" /> : null}
                Enviar mensagem
              </Button>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  href="#"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="#"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
