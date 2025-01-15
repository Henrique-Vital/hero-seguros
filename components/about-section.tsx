import Image from "next/image"
import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section className="py-16 px-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-purple-600 font-semibold mb-4">NÓS MUDAMOS O JOGO</h2>
            <h3 className="text-4xl font-bold mb-6">
              Nascemos para{" "}
              <span className="bg-gradient-to-r from-[#d80073] to-[#6e00b2] text-transparent bg-clip-text">
                descomplicar o mercado.
              </span>
            </h3>
            <p className="text-gray-600 mb-8">
              Enquanto muitos se apegam ao passado, na Hero somos impulsionados pela inovação. O cliente é o centro de nossas operações e por isso, criamos experiências personalizadas oferecendo muito mais que um seguro viagem.
            </p>
          </div>

          <div>
            <div className="flex items-start gap-4 mb-8">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Generali Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <p className="text-gray-600 text-sm">
                Somos parceiros da Generali Brasil, seguradora responsável pelos seguros comercializados, e atuamos como MGA – Managing General Agent.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 bg-gray-50">
                <p className="font-bold text-xl mb-2">200</p>
                <p className="text-sm text-gray-600">anos de história</p>
              </Card>
              <Card className="p-4 bg-gray-50">
                <p className="font-bold text-xl mb-2">70M</p>
                <p className="text-sm text-gray-600">milhões de clientes</p>
              </Card>
              <Card className="p-4 bg-gray-50">
                <p className="font-bold text-xl mb-2">82M</p>
                <p className="text-sm text-gray-600">funcionários pelo mundo</p>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt={`Partner logo ${i + 1}`}
                  width={120}
                  height={40}
                  className="opacity-50 hover:opacity-75 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

