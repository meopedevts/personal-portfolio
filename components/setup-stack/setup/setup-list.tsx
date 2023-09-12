'use client'

import { getSetup } from '@/services/notion'
import { GetSetupType } from '@/types/notion-setup-types'
import SetupCard from '@/components/setup-stack/setup/setup-card'
import { useEffect, useState } from 'react'
import SetupSkeleton from './setup-skeleton'

const SetupList = () => {
  const [setupData, setsetupData] = useState<GetSetupType[]>([])

  const [requestDone, setrequestDone] = useState(false)

  const requestSetup = async () => {
    const response = await getSetup()
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
        <SetupSkeleton />
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
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 py-6 md:flex-row md:flex-wrap md:justify-start">
        {setupData.map((setup, index) => (
          <SetupCard
            key={index}
            title={setup.title}
            group={setup.group}
            image={setup.image}
            buy={setup.buy}
          />
        ))}
      </div>
    </div>
  )
}

export default SetupList
