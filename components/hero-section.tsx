import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 2xl:px-32 py-16 md:py-20 lg:pt-16 lg:pb-16 2xl:pt-24 2xl:pb-32 relative w-full flex flex-col gap-16 md:gap-24 lg:gap-12 2xl:gap-20 items-center text-center overflow-hidden bg-[#13111B]">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/esquerda-shadow-purple-UJmSzSDiZoFqOFVvr5xXVxUU6p5FOe.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/direita-shadow-pink-j6znByjX8YyFoOjxUBomegcLbRwpec.svg"
          alt=""
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="z-20 flex flex-col items-center mt-12 md:mt-0">
        <h1 className="font-semibold text-5xl md:text-6xl lg:text-8xl 2xl:text-8xl text-white">
          <span className="bg-gradient-to-r from-[#d80073] to-[#6e00b2] text-transparent bg-clip-text">
            Muito mais
          </span>{" "}
          que um
        </h1>
        <h1 className="font-semibold text-5xl md:text-6xl lg:text-8xl 2xl:text-8xl text-white">
          seguro viagem
        </h1>
        <h4 className="mt-10 lg:mt-6 2xl:mt-12 font-light md:font-extralight md:text-sm lg:text-md xl:text-lg max-w-[640px] text-white/90">
          Somos uma insurtech, uma empresa de seguros que utiliza tecnologia de ponta para criar e distribuir seguros personalizados, focados na experiência do cliente durante toda a sua jornada.
        </h4>
        <div className="flex gap-4 mt-16 md:mt-16 lg:mt-10">
          <Button className="
            2xl:px-8 lg:px-6 md:px-8 px-6
            md:py-4 py-3
            rounded-full
            transition-all
            duration-500
            disabled:opacity-50
            bg-gradient-to-r from-[#d80073] to-[#6e00b2] to-75% shadow-spread shadow-white/15 hover:shadow-white/30
          ">
            <p className="text-sm text-white">Para você</p>
          </Button>
          <Button className="
            2xl:px-8 lg:px-6 md:px-8 px-6
            md:py-4 py-3
            rounded-full
            transition-all
            duration-500
            disabled:opacity-50
            border border-white/50 bg-gradient-to-b from-white/15 to-[#6e00b2]/20 shadow-spread shadow-[#6e00b2]/20 hover:shadow-[#6e00b2]/50
          ">
            <p className="text-sm text-white">Para sua empresa</p>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-col md:flex-row mt-10 md:mt-0 gap-4 md:gap-2 lg:gap-4 text-left z-20 w-full justify-between">
        {[
          {
            number: "+1.7 milhão",
            label: "De clientes segurados"
          },
          {
            number: "+120 mil",
            label: "Bilhetes emitidos por mês"
          },
          {
            number: "+4 mil",
            label: "Agências venderam nosso Seguro Viagem"
          }
        ].map((stat, index) => (
          <div key={index} className="bg-white/5 p-8 md:p-6 lg:p-8 flex flex-col justify-end items-start md:min-h-52 w-full rounded-md relative">
            <span className="absolute w-full top-0 left-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
            <span className="absolute top-8 right-8 lg:top-10 lg:right-10 w-3 h-3 rounded-full bg-gradient-to-bl from-[#d80073] to-[#6e00b2]"></span>
            <span className="absolute top-8 right-8 lg:top-10 lg:right-10 w-3 h-3 rounded-full bg-gradient-to-bl from-[#d80073] to-[#6e00b2] animate-ping"></span>
            <h2 className="font-medium lg:font-regular text-3xl md:text-4xl lg:text-5xl text-white">
              {stat.number}
            </h2>
            <h4 className="text-md font-extralight mt-2 text-white/90">
              {stat.label}
            </h4>
          </div>
        ))}
      </div>
    </section>
  )
}

