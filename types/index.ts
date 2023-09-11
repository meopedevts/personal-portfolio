import { Moment } from 'moment'

interface LocationProps {
  city: string
  state: string
}

interface DurationProps {
  initial: Moment
  final: Moment
}

interface CarrerProps {
  office: string
  job: string
  jobUrl: string
  location: LocationProps
  duration: DurationProps
}

export type { LocationProps, DurationProps, CarrerProps }
