import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'meopedevts',
  description: 'meopedevts portfolio with Nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'scrollbar-track-zinc-950 scrollbar-thumb-zinc-100 scrollbar-corner-zinc-100 scrollbar-thin scrollbar-thumb-rounded bg-zinc-950 text-zinc-100',
          manrope.className,
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
