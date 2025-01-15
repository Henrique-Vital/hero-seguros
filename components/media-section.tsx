import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function MediaSection() {
  return (
    <section className="py-16 px-12 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-purple-600 font-semibold mb-4">HERO NA MÍDIA</h2>
        <h3 className="text-6xl font-bold mb-12">
          Reconhecendo{" "}
          <span className="bg-gradient-to-r from-[#d80073] to-[#6e00b2] text-transparent bg-clip-text">nossos heróis.</span>
        </h3>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News Column */}
          <div className="lg:col-span-2 grid gap-8">
            <article className="grid md:grid-cols-2 gap-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V4B8VVEg2eqBYPioomr0C7Yb4ym4bZ.png"
                alt="Hero Seguros programa de indicações"
                width={400}
                height={300}
                className="rounded-lg w-full h-[250px] object-cover"
              />
              <div>
                <p className="text-gray-500 text-sm mb-2">Panrotas, 10/2024</p>
                <h4 className="text-xl font-bold mb-3">
                  Hero Seguros lança programa de indicações com comissão para agentes
                </h4>
                <p className="text-gray-600 mb-4">
                  Buscando expandir e fortalecer a relação com as agências, a Hero lançou o programa #EuConfieEuIndico, que proporciona benefícios para as agências que indicarem.
                </p>
                <Link href="#" className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center">
                  Saiba mais →
                </Link>
              </div>
            </article>

            <article className="grid md:grid-cols-2 gap-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V4B8VVEg2eqBYPioomr0C7Yb4ym4bZ.png"
                alt="Hero Seguros crescimento"
                width={400}
                height={300}
                className="rounded-lg w-full h-[250px] object-cover"
              />
              <div>
                <p className="text-gray-500 text-sm mb-2">Panrotas, 09/2024</p>
                <h4 className="text-xl font-bold mb-3">
                  Hero Seguros cresce 40% no 1 semestre e fatura R$80 milhões
                </h4>
                <p className="text-gray-600 mb-4">
                  A Hero vem crescendo a cada ano e, no primeiro semestre de 2024, registrou um crescimento de 40% em relação ao mesmo período no ano passado.
                </p>
                <Link href="#" className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center">
                  Saiba mais →
                </Link>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold">Mais notícias</h4>
            
            <article className="border-b border-gray-200 pb-6">
              <p className="text-gray-500 text-sm mb-2">Revista Apólice, 07/2024</p>
              <h5 className="font-bold mb-2">
                Hero Seguros e CRMBonus fecham parceria para cashback
              </h5>
              <Link href="#" className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center">
                Saiba mais →
              </Link>
            </article>

            <article className="border-b border-gray-200 pb-6">
              <p className="text-gray-500 text-sm mb-2">Panrotas, 10/2024</p>
              <h5 className="font-bold mb-2">
                Hero Seguros terá nova sala vip no Aeroporto Internacional do Galeão
              </h5>
              <Link href="#" className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center">
                Saiba mais →
              </Link>
            </article>

            <article className="border-b border-gray-200 pb-6">
              <p className="text-gray-500 text-sm mb-2">Panrotas, 08/2024</p>
              <h5 className="font-bold mb-2">
                Hero Seguros é a patrocinadora oficial da equipe de Barueri Volleyball Club
              </h5>
              <Link href="#" className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center">
                Saiba mais →
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

