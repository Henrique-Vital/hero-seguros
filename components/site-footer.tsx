import Link from "next/link"
import { Linkedin, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="bg-[#0b0512] py-12 px-4 md:px-10 lg:px-16 2xl:px-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="space-y-6">
              {/* Logo */}
              <Link href="https://heroseguros.com.br/" className="inline-block">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-logo-VKaUXzinakUJQ3X6j0LhOUoRO6drQc.svg"
                  alt="Hero Seguros Logo"
                  width={120}
                  height={50}
                  className="h-14"
                />
              </Link>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/company/heroseguros/posts/?feedView=all" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="https://www.instagram.com/heroseguros/" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://www.youtube.com/@HeroSegurosOficial" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 md:mt-0">
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Institucional</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#nossos-produtos" className="text-gray-400 hover:text-white transition-colors">
                      Nossos produtos
                    </Link>
                  </li>
                  <li>
                    <Link href="#para-empresas" className="text-gray-400 hover:text-white transition-colors">
                      Para empresas
                    </Link>
                  </li>
                  <li>
                    <Link href="#hero-na-midia" className="text-gray-400 hover:text-white transition-colors">
                      Hero na mídia
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold">Nossos seguros</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="https://seguroviagem.heroseguros.com.br/" className="text-gray-400 hover:text-white transition-colors">
                      Seguro viagem
                    </Link>
                  </li>
                  <li>
                    <Link href="https://seguro.simple2u.com.br/hero-seguro-celular/" className="text-gray-400 hover:text-white transition-colors">
                      Seguro celular
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2024 Hero Seguros. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-gray-400">Powered by</span>
              <span className="text-pink-500">♥</span>
              <span className="text-gray-400">and distributed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

