'use client'

import { cn } from '@/lib/utils'
import { ReactNode, useEffect, useRef, useState } from 'react'

interface MaqueeProps {
  children: ReactNode
  className?: string
}

const Marquee = ({ children, className }: MaqueeProps) => {
  const marqueeRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-zinc-100">
      <div
        className={cn('nowrap animate-marquee duration-6000', className)}
        ref={marqueeRef}
      >
        {children}
      </div>
    </div>
  )
}

export default Marquee
