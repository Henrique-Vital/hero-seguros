'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Monitor, Code2, Database, Heart } from 'lucide-react'

export function BusinessSection() {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-16 2xl:px-32 bg-white" id="para-empresas">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-purple-600 font-semibold mb-4">PARA EMPRESAS</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
            Bem-vindo ao{" "}
            <span className="bg-gradient-to-r from-[#d80073] to-[#6e00b2] text-transparent bg-clip-text">
              novo jeito de vender seguros
            </span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <Accordion type="single" collapsible defaultValue="canais">
              <AccordionItem value="canais">
                <AccordionTrigger className="flex gap-4">
                  <Monitor className="h-5 w-5" />
                  <span>Canais de venda diretos</span>
                </AccordionTrigger>
                <AccordionContent>
                  Disponibilizamos canais de venda diretos para facilitar a integração com sua operação. Contamos com uma API para parceiros com sistema próprio, solução Whitelabel e um Backoffice completo para emissão de seguros.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sistema">
                <AccordionTrigger className="flex gap-4">
                  <Code2 className="h-5 w-5" />
                  <span>Sistema próprio de emissão</span>
                </AccordionTrigger>
                <AccordionContent>
                  Nossa plataforma oferece um sistema completo e intuitivo para emissão de seguros, permitindo total autonomia na gestão das suas vendas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="customizacao">
                <AccordionTrigger className="flex gap-4">
                  <Database className="h-5 w-5" />
                  <span>Customização</span>
                </AccordionTrigger>
                <AccordionContent>
                  Oferecemos soluções personalizadas para atender às necessidades específicas do seu negócio, com flexibilidade para adaptar produtos e processos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="programa">
                <AccordionTrigger className="flex gap-4">
                  <Heart className="h-5 w-5" />
                  <span>Programa de indicações</span>
                </AccordionTrigger>
                <AccordionContent>
                  Participe do nosso programa de indicações e seja recompensado por cada novo parceiro que trouxer para nossa rede.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="relative min-h-[400px] bg-purple-950 rounded-lg overflow-hidden">          
          <div className="absolute inset-0">
              <Image
                src="/images/business-bg.png" // Caminho relativo na pasta "public"
                alt="Background"
                layout="fill" // Preenche a div pai
                objectFit="cover" // Mesma funcionalidade do bg-cover
                objectPosition="center" // Mesma funcionalidade do bg-center
                className="opacity-50" // Controle de opacidade
                priority // Carregamento prioritário para imagens importantes
              />
            </div>
            <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">              
              <Button className="bg-pink-600 hover:bg-pink-700 mt-auto">
                Entre em contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

