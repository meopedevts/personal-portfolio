import Bullet from '@/components/bullet/bullet'
import Marquee from '@/components/sign/sign'

export default function Home() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col justify-center overflow-hidden px-5 py-8 xl:px-0">
      <section className="flex max-w-5xl flex-col justify-start gap-4 overflow-hidden py-8 xl:px-0">
        <div className="flex flex-col gap-6 md:max-w-3xl">
          <h1 className="text-3xl font-bold md:text-4xl md:leading-relaxed lg:text-5xl">
            Hey, I&apos;m meopedevts -- Full-Stack Developer
          </h1>
          <div className="flex flex-col gap-6 md:max-w-2xl">
            <h2 className="text-lg font-medium text-zinc-400">
              Unindo design e código, sigo criando projetos únicos.
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:max-w-lg">
          <Marquee className="flex justify-center text-center">
            <h3 className="relative flex items-center pl-5 text-sm">
              <span className="font-semibold">
                Disponível para trabalhos freelance
              </span>
              <Bullet />
            </h3>
          </Marquee>
        </div>
      </section>
    </main>
  )
}
