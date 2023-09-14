import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const StackSkeleton = () => {
  return (
    <div className="flex w-full max-w-5xl flex-col items-start justify-center gap-4 py-6">
      <div className="mx-2 flex max-w-5xl flex-wrap items-center justify-between gap-6 py-6 md:mx-3 md:justify-start">
        <Skeleton className="dark h-[260px] w-[154px] md:w-[232px]" />
        <Skeleton className="dark h-[260px] w-[154px] md:w-[232px]" />
        <Skeleton className="dark h-[260px] w-[154px] md:w-[232px]" />
        <Skeleton className="dark h-[260px] w-[154px] md:w-[232px]" />
      </div>
    </div>
  )
}

export default StackSkeleton
