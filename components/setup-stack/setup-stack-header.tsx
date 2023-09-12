import React from 'react'

interface SetupStackHeaderProps {
  title: string
}

const SetupStackHeader = ({ title }: SetupStackHeaderProps) => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="text-zinc-400">
        Aqui trago uma lista sobre meu setup, softwares, serviços e equipamentos
        que utilizo em meu dia a dia. Conforme for atualizando meu setup,
        atualizarei a lista abaixo.
      </h2>
    </div>
  )
}

export default SetupStackHeader
