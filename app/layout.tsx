import Navbar from '@/components/navbar'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meope Portfolio',
  description: 'My portfolio 2.0 with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('bg-zinc-950 text-zinc-50', inter.className)}>
        <main>
          <header className="flex items-center justify-center">
            <Navbar />
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}
