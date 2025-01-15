import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Star, ShoppingBag, CreditCard, Rocket, Luggage } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section className="py-16 px-12 bg-[#13111B]">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-pink-500 font-semibold mb-4">PARA VOCÊ</h2>
            <h3 className="text-4xl font-bold text-white">
              A melhor opção<br />
              quando o assunto é{" "}
              <span className="bg-gradient-to-r from-[#d80073] to-[#6e00b2] text-transparent bg-clip-text">experiência.</span>
            </h3>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-purple-900/50">
              para sua viagem
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-purple-900/50">
              para seu celular
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Telemedicina Albert Einstein",
              description: "Você terá acesso ao Pronto Atendimento Virtual do Hospital Israelita Albert Einstein em casos de urgência ou emergência com médicos especializados.",
              icon: <Smartphone className="h-6 w-6" />
            },
            {
              title: "Sala VIP W Premium",
              description: "Durante a ida, você ganha o acesso às salas VIPs espalhadas pelo Brasil, além de 20% de desconto em qualquer sala VIP da W Premium Group, tanto na ida quanto na volta. *Consulte o regulamento.",
              icon: <Star className="h-6 w-6" />
            },
            {
              title: "Descontos em lojas Duty Free",
              description: "Você ganha o upgrade gratuito para a categoria Platinum Club Assist válida por 6 meses, com direito a 15% de desconto em lojas Duty Free e Hudson.",
              icon: <ShoppingBag className="h-6 w-6" />
            },
            {
              title: "Reembolso",
              description: "Você conta com o reembolso mais rápido do mercado de seguro viagem, realizado em até 72 horas após o envio completo da documentação.",
              icon: <CreditCard className="h-6 w-6" />
            },
            {
              title: "Atendimento 24h internalizado",
              description: "O DNA Hero é formado por praticidade e segurança, através da agilidade da nossa assistência 100% internalizada, trilíngue, disponível 24 horas por dia, oferecendo suporte em qualquer momento.",
              icon: <Rocket className="h-6 w-6" />
            }
          ].map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-purple-900/30 border-purple-800/30 hover:bg-purple-900/40 transition-colors"
            >
              <div className="text-gray-400 mb-4">{feature.icon}</div>
              <h4 className="text-white font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </Card>
          ))}

          <Card className="p-6 bg-gradient-to-r from-pink-600 to-purple-600 border-0 flex flex-col items-center text-center">
            <Luggage className="h-12 w-12 text-white mb-4" />
            <h4 className="text-white text-xl font-semibold mb-3">
              Clique aqui e veja todos os benefícios para sua viagem
            </h4>
          </Card>
        </div>
      </div>
    </section>
  )
}

