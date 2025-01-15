import "@/styles/globals.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hero Seguros - Muito mais que um seguro viagem",
  description: "Somos uma insurtech, uma empresa de seguros que utiliza tecnologia de ponta para criar e distribuir seguros personalizados.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'