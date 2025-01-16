'use client'

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  empresa: z.string().min(2, "Empresa é obrigatória"),
  estado: z.string().min(1, "Estado é obrigatório"),
  telefone: z.string().min(10, "Telefone inválido"),
  segmento: z.string().min(1, "Segmento é obrigatório"),
  cnpj: z.string().min(14, "CNPJ inválido"),
  mensagem: z.string().min(10, "Mensagem é obrigatória"),
  aceito: z.boolean().refine((val) => val === true, "Você precisa aceitar os termos"),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      empresa: "",
      estado: "",
      telefone: "",
      segmento: "",
      cnpj: "",
      mensagem: "",
      aceito: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <section className="py-16 px-4 md:px-10 lg:px-16 2xl:px-32 bg-[#0b0512]">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-pink-500 text-sm mb-4">VENDA NOSSO SEGURO</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Você também<br />
              pode fazer parte<br />
              <span className="bg-gradient-to-r from-[#d80073] to-[#6e00b2] text-transparent bg-clip-text">dessa história.</span>
            </h3>
          </div>

          <div className="bg-purple-950/50 p-8 rounded-lg backdrop-blur-sm">
            <h4 className="text-xl text-white mb-6">Seja um super agente Hero!</h4>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Nome*</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-purple-900/50 border-purple-800 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email*</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" className="bg-purple-900/50 border-purple-800 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="empresa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Empresa*</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-purple-900/50 border-purple-800 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="estado"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Qual o seu estado?*</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-purple-900/50 border-purple-800 text-white">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sp">São Paulo</SelectItem>
                          <SelectItem value="rj">Rio de Janeiro</SelectItem>
                          <SelectItem value="mg">Minas Gerais</SelectItem>
                          {/* Add other states */}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Telefone*</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-purple-900/50 border-purple-800 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="segmento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Qual o seu segmento?*</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-purple-900/50 border-purple-800 text-white">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="agencia">Agência de Viagens</SelectItem>
                          <SelectItem value="operadora">Operadora</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cnpj"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Qual o CNPJ da empresa?*</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-purple-900/50 border-purple-800 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Como podemos te ajudar?*</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          className="bg-purple-900/50 border-purple-800 text-white min-h-[100px]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="aceito"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-gray-300">
                          Aceito que a Hero entre em contato comigo*
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  Enviar
                </Button>

                <p className="text-gray-400 text-xs">
                  *Seus dados serão utilizados apenas para fins de contato e estão protegidos de acordo com as normas da Lei Geral de Proteção de Dados Pessoais (LGPD).
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

