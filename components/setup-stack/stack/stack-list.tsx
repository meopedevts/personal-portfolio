'use client'

import { getStack } from '@/services/notion'
import { GetStackType } from '@/types/notion-setup-types'
import StackCard from '@/components/setup-stack/stack/stack-card'
import { useEffect, useState } from 'react'
import SetupStackSkeleton from '@/components/setup-stack/setup-stack-skeleton'

const StackList = () => {
  const [setupData, setsetupData] = useState<GetStackType[]>([])

  const [requestDone, setrequestDone] = useState(false)

  const requestSetup = async () => {
    const response = await getStack()
    setsetupData(response)
    setrequestDone(true)
  }

  useEffect(() => {
    if (!requestDone) {
      requestSetup()
    }
  }, [requestDone])

  if (!requestDone) {
    return (
      <>
        <SetupStackSkeleton route="stack" />
      </>
    )
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 py-6">
      <div className="flex max-w-5xl flex-col gap-4">
        <h1 className="text-3xl font-bold">Equipamentos</h1>
        <h2 className="text-zinc-400">
          Lista de equipamentos que uso diariamente
        </h2>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 py-6 md:flex-row md:flex-wrap">
        {setupData.map((setup, index) => (
          <StackCard
            key={index}
            title={setup.title}
            group={setup.group}
            image={setup.image}
            site={setup.site}
          />
        ))}
      </div>
    </div>
  )
}

export default StackList
