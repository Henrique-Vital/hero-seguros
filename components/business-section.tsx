'use client'

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
    <section className="py-16 px-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-purple-600 font-semibold mb-4">PARA EMPRESAS</h2>
          <h3 className="text-6xl font-bold">
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
          
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GMDQPxtE3F9tLlLA1YDLaxGN6dtdwg.png')] bg-cover bg-center opacity-50" />
            <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="space-y-4 mb-8">
                <p className="text-pink-500 text-5xl font-bold tracking-wider" style={{
                  textShadow: '0 0 10px rgba(236, 72, 153, 0.7), 0 0 20px rgba(236, 72, 153, 0.5)'
                }}>
                  BORN
                </p>
                <p className="text-pink-500 text-2xl font-medium" style={{
                  textShadow: '0 0 8px rgba(236, 72, 153, 0.7)'
                }}>
                  TO BE
                </p>
                <p className="text-pink-500 text-5xl font-bold tracking-wider" style={{
                  textShadow: '0 0 10px rgba(236, 72, 153, 0.7), 0 0 20px rgba(236, 72, 153, 0.5)'
                }}>
                  HERO
                </p>
              </div>
              <Button className="bg-pink-600 hover:bg-pink-700">
                Entre em contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

