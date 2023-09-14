import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SetupSkeleton = () => {
  return (
    <div className="flex w-full max-w-5xl flex-col items-start justify-center gap-4 py-6">
      <div className="flex max-w-5xl flex-col gap-4">
        <Skeleton className="dark h-12 w-72" />
        <Skeleton className="dark h-4 w-80" />
      </div>
      <div className="mx-2 flex max-w-5xl flex-wrap items-center justify-between gap-5 py-6 md:mx-3 md:justify-start">
        <Skeleton className="dark h-[260px] w-[154px] md:h-[320px] md:w-[232px]" />
        <Skeleton className="dark h-[260px] w-[154px] md:h-[320px] md:w-[232px]" />
        <Skeleton className="dark h-[260px] w-[154px] md:h-[320px] md:w-[232px]" />
        <Skeleton className="dark h-[260px] w-[154px] md:h-[320px] md:w-[232px]" />
      </div>
    </div>
  )
}

export default SetupSkeleton
