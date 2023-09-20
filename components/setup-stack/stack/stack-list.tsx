'use client'

import { getStack } from '@/services/notion'
import StackCard from '@/components/setup-stack/stack/stack-card'
import { useMemo, useState } from 'react'
import StackSkeleton from '@/components/setup-stack/stack/stack-skeleton'
import { Input } from '@/components/ui/input'
import { useQuery } from '@tanstack/react-query'

const StackList = () => {
  const { data, isFetching } = useQuery(
    ['stack'],
    () => {
      const response = getStack()

      return response
    },
    {
      staleTime: 1000 * 60 * 10,
    },
  )

  const [query, setQuery] = useState('')

  const filteredStack = useMemo(() => {
    return data?.filter((stack) => {
      return (
        stack.title.toLowerCase().includes(query.toLowerCase()) ||
        stack.group.toLowerCase().includes(query.toLowerCase())
      )
    })
  }, [data, query])

  if (isFetching) {
    return (
      <>
        <StackSkeleton />
      </>
    )
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 py-6">
      <div className="mx-1 flex max-w-5xl md:mx-3">
        <Input
          placeholder="Pesquise o item desejado"
          className="dark transition-colors duration-300 ease-in-out focus-visible:border-zinc-100 focus-visible:ring-0 focus-visible:ring-offset-0"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="mx-1 flex max-w-5xl flex-wrap items-center justify-between gap-6 py-6 md:mx-3 md:justify-start">
        {filteredStack?.map((stack, index) => (
          <StackCard
            key={index}
            title={stack.title}
            group={stack.group}
            image={stack.image}
            site={stack.site}
          />
        ))}
      </div>
    </div>
  )
}

export default StackList
