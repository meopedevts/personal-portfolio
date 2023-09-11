import { CarrerProps } from '@/types/index'
import moment, { Moment } from 'moment'
import Link from 'next/link'

const CarrerCard = ({
  office,
  job,
  jobUrl,
  location,
  duration,
}: CarrerProps) => {
  const initial: Moment = duration.initial
  const final: Moment = duration.final
  const anos: number = final.diff(initial, 'years')
  const meses: number = final.diff(initial, 'months') % 12

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-start justify-center gap-2">
      <h1 className="text-lg font-bold">{office}</h1>
      <div className="flex gap-1 text-zinc-400">
        <Link href={jobUrl} target="_blank" className="underline">
          {job}
        </Link>
        <div>•</div>
        <div>
          {location.city}, {location.state}
        </div>
      </div>
      <div className="flex gap-1 text-zinc-400">
        <div>
          {initial.format('MMM YYYY').toLowerCase()} --{' '}
          {final.format('MMM YYYY') === moment().format('MMM YYYY')
            ? 'Momento'
            : final.format('MMM YYYY').toLowerCase()}
        </div>
        <div>•</div>
        {/* <div>1 ano 2 meses</div> */}
        <div>
          {anos === 1 ? anos + ' ano' : anos + ' anos'}{' '}
          {meses === 0 ? '' : meses + ' meses'}
        </div>
      </div>
    </div>
  )
}

export default CarrerCard
