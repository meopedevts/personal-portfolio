import Image from 'next/image'
import working from '@/public/img/working.svg'

export default function Stack() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center justify-center overflow-hidden px-5 py-8 xl:px-0">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 overflow-hidden py-8 xl:px-0">
        <Image src={working} alt="working" className="h-40 w-40" />
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-1">
          <h1 className="text-xl md:text-2xl">
            Hey, está pagina ainda está em construção!
          </h1>
          <h2 className="text-sm text-muted-foreground md:text-base">
            Estou trabalhando para trazer a melhor experiência possível para
            você, espero vê-lo em breve.
          </h2>
        </div>
      </div>
    </main>
  )
}
