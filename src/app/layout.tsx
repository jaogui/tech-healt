import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tech Healt',
  description: 'Gerenciador de negócios focado em saúde',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="font-Lato bg-slate-100">{children}</body>
    </html>
  )
}
