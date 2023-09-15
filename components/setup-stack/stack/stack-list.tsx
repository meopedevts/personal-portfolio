'use client'

import { getStack } from '@/services/notion'
import { GetStackType } from '@/types/notion-setup-types'
import StackCard from '@/components/setup-stack/stack/stack-card'
import { useEffect, useMemo, useState } from 'react'
import StackSkeleton from '@/components/setup-stack/stack/stack-skeleton'
import { Input } from '@/components/ui/input'

const StackList = () => {
  const [stackData, setstackData] = useState<GetStackType[]>([])
  const [query, setQuery] = useState('')

  const [requestDone, setrequestDone] = useState(false)

  const requestSetup = async () => {
    const response = await getStack()
    setstackData(response)
    setrequestDone(true)
  }

  const filteredStack = useMemo(() => {
    return stackData.filter((stack) => {
      return (
        stack.title.toLowerCase().includes(query.toLowerCase()) ||
        stack.group.toLowerCase().includes(query.toLowerCase())
      )
    })
  }, [stackData, query])

  useEffect(() => {
    if (!requestDone) {
      requestSetup()
    }
  }, [requestDone])

  if (!requestDone) {
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
          className="dark"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="mx-1 flex max-w-5xl flex-wrap items-center justify-between gap-6 py-6 md:mx-3 md:justify-start">
        {filteredStack.map((stack, index) => (
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
