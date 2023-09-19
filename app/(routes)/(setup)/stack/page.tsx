import SetupStackHeader from '@/components/setup-stack/setup-stack-header'
import StackList from '@/components/setup-stack/stack/stack-list'
import StackSkeleton from '@/components/setup-stack/stack/stack-skeleton'
import { Suspense } from 'react'

export default function Stack() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center justify-center overflow-hidden px-5 py-8 xl:px-0">
      <section className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 overflow-hidden xl:px-0">
        <SetupStackHeader title="Stack" />
        <Suspense fallback={<StackSkeleton />}>
          <StackList />
        </Suspense>
      </section>
    </main>
  )
}
