import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

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
      <body className={cn('bg-zinc-950 text-zinc-50', manrope.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
