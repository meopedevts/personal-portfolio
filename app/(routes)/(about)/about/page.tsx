import Image from 'next/image'
import working from '@/public/img/working.svg'
import Link from 'next/link'
import CarrerCard from '@/components/about/carrer-card'
import { CarrerProps } from '@/types'
import moment from 'moment'

const carrer: CarrerProps[] = [
  {
    office: 'Full-stack Developer',
    job: 'Freelancer',
    jobUrl: '/',
    location: {
      city: 'Uberândia',
      state: 'MG',
    },
    duration: {
      initial: moment('2022-06', 'YYYY-MM'),
      final: moment(),
    },
  },
]

export default function About() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-start justify-start overflow-hidden px-5 xl:px-0">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-start justify-center gap-10 overflow-hidden py-8 xl:px-0">
        <h1 className="text-4xl font-bold">Sobre mim</h1>
        <div className="align-center flex w-full max-w-5xl flex-col justify-between gap-4 overflow-hidden md:flex-row xl:px-0">
          <Image
            src={working}
            alt="my-photo"
            width={400}
            height={400}
            loading="lazy"
            className="transition-all duration-300 ease-out hover:saturate-0"
          />
          <div className="flex max-w-lg flex-col items-start justify-start gap-5 px-0 py-0 leading-relaxed text-zinc-400">
            <p>
              Meu nome é Marcelo, mais conhecido como{' '}
              <i className="text-zinc-100">Meope</i> e tenho{' '}
              <span className="text-zinc-100">30</span> anos.
            </p>
            <p>
              Sou programador full-stack, apaixonado por tecnologia. Atualmente
              trabalho como Freelancer e tenho <i>1</i> anos de experiência com
              essas tecnologias: HTML, CSS, JavaScript, TypeScript, ReactJS,
              NextJS, NodeJS, NestJS.
            </p>
            <p>
              Quando não estou trabalhando, estou codando algum projeto pessoal
              ou jogando algum jogo na{' '}
              <Link
                href="https://steamcommunity.com/id/meopedevts/"
                target="_blank"
                className="text-zinc-100 underline"
              >
                <i>Steam</i>
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <div className="flex max-w-5xl flex-col items-start justify-start gap-6 overflow-hidden py-8 xl:px-0">
        <h1 className="text-2xl font-bold">Carreira</h1>
        <div className="mx-auto flex max-w-5xl flex-col gap-5 xl:px-0">
          {carrer.map((carrer, index) => (
            <CarrerCard
              key={index}
              office={carrer.office}
              job={carrer.job}
              jobUrl={carrer.jobUrl}
              location={carrer.location}
              duration={carrer.duration}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
