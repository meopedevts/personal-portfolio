'use client'

import { getSetup } from '@/services/notion'
import SetupCard from '@/components/setup-stack/setup/setup-card'
import { useMemo, useState } from 'react'
import SetupSkeleton from '@/components/setup-stack/setup/setup-skeleton'
import { Input } from '@/components/ui/input'
import { useQuery } from '@tanstack/react-query'

const SetupList = () => {
  const { data, isFetching } = useQuery(
    ['setup'],
    () => {
      const response = getSetup()

      return response
    },
    {
      staleTime: 1000 * 60 * 10,
    },
  )

  const [query, setQuery] = useState('')

  const filteredSetup = useMemo(() => {
    return data?.filter((setup) => {
      return (
        setup.title.toLowerCase().includes(query.toLowerCase()) ||
        setup.group.toLowerCase().includes(query.toLowerCase())
      )
    })
  }, [data, query])

  if (isFetching) {
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
          className="dark transition-colors duration-300 ease-in-out focus-visible:border-zinc-100 focus-visible:ring-0 focus-visible:ring-offset-0"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="mx-1 flex max-w-5xl flex-wrap items-center justify-between gap-5 py-6 md:mx-3 md:justify-start">
        {filteredSetup?.map((setup, index) => (
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
