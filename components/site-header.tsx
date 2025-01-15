import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="w-full pt-10 font-light z-20 bg-[#13111B]">
      <div className="w-full h-full flex items-center justify-between px-6 md:px-10 lg:px-16 2xl:px-32">
        <Link href="/">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-logo-VKaUXzinakUJQ3X6j0LhOUoRO6drQc.svg" 
            alt="Logotipo da empresa Hero Seguros" 
            width={120} 
            height={50} 
            className="h-10 cursor-pointer"
          />
        </Link>
        <nav className="hidden md:flex items-center md:gap-8 lg:gap-12">
          <NavItem href="#" text="Quem somos" />
          <NavItem href="https://seguroviagem.heroseguros.com.br/" text="Seguro Viagem" external />
          <NavItem href="https://seguro.simple2u.com.br/hero-seguro-celular/" text="Seguro Celular" external />
          <NavItem href="#" text="Para empresas" />
        </nav>
        <div className="hidden md:block">
          <Button className="
            2xl:px-8 lg:px-6 md:px-8 px-6
            md:py-4 py-3
            rounded-full
            transition-all
            duration-500
            disabled:opacity-50
            border border-neutral-400/50 bg-gradient-to-b from-light/15 to-purple-default/20 shadow-spread shadow-purple-default/20 hover:shadow-purple-default/50
          ">
            <span className="text-sm">Seja um parceiro</span>
          </Button>
        </div>
        <div className="md:hidden">
          <div className="transition-all duration-75 flex flex-col h-2 w-6 z-20 gap-1">
            <span className="transition-all duration-300 h-px w-6 bg-light"></span>
            <span className="transition-all duration-300 h-px w-6 bg-light"></span>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent from-20% via-neutral-300/50 via-50% to-transparent to-80% mt-10"></div>
    </header>
  )
}

function NavItem({ href, text, external = false }: { href: string; text: string; external?: boolean }) {
  return (
    <Link 
      href={href} 
      target={external ? "_blank" : undefined}
      className="group cursor-pointer text-neutral-300 hover:text-light transition-all duration-300"
    >
      <p>{text}</p>
      <div className="h-[2px] bg-gradient-to-r from-pink to-purple-default w-0 group-hover:w-8 transition-all duration-300 mt-1"></div>
    </Link>
  )
}

