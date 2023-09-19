import { Suspense } from 'react'
import SetupStackHeader from '@/components/setup-stack/setup-stack-header'
import SetupList from '@/components/setup-stack/setup/setup-list'
import SetupSkeleton from '@/components/setup-stack/setup/setup-skeleton'

export default function Setup() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center justify-center overflow-hidden px-5 py-8 xl:px-0">
      <section className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 overflow-hidden xl:px-0">
        <SetupStackHeader title="Setup" />
        <Suspense fallback={<SetupSkeleton />}>
          <SetupList />
        </Suspense>
      </section>
    </main>
  )
}
