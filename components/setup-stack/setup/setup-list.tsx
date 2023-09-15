'use client'

import { getSetup } from '@/services/notion'
import { GetSetupType } from '@/types/notion-setup-types'
import SetupCard from '@/components/setup-stack/setup/setup-card'
import { useEffect, useMemo, useState } from 'react'
import SetupSkeleton from '@/components/setup-stack/setup/setup-skeleton'
import { Input } from '@/components/ui/input'

const SetupList = () => {
  const [setupData, setsetupData] = useState<GetSetupType[]>([])
  const [query, setQuery] = useState('')

  const [requestDone, setrequestDone] = useState(false)

  const requestSetup = async () => {
    const response = await getSetup()
    setsetupData(response)
    setrequestDone(true)
  }

  const filteredSetup = useMemo(() => {
    return setupData.filter((setup) => {
      return (
        setup.title.toLowerCase().includes(query.toLowerCase()) ||
        setup.group.toLowerCase().includes(query.toLowerCase())
      )
    })
  }, [setupData, query])

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
      <div className="flex max-w-5xl">
        <Input
          placeholder="Pesquise o item desejado"
          className="dark"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="mx-1 flex max-w-5xl flex-wrap items-center justify-between gap-5 py-6 md:mx-3 md:justify-start">
        {filteredSetup.map((setup, index) => (
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
