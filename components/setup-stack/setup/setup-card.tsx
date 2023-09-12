import { GetSetupType } from '@/types/notion-setup-types'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import NotFound from '@/public/img/notfound.svg'
import Image from 'next/image'
import Link from 'next/link'

const SetupCard = ({ title, group, image, buy }: GetSetupType) => {
  return (
    <Link href={buy !== undefined ? buy : '/setup'}>
      <Card className="dark mx-auto h-[320px] w-[232px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
        <CardHeader className="flex min-h-[198px] items-center justify-center">
          {image !== undefined ? (
            <Image
              src={image}
              alt={title}
              unoptimized
              width={150}
              height={150}
              className="max-h-[150px] max-w-[150px] bg-none object-contain"
            />
          ) : (
            <Image
              src={NotFound}
              alt="NotFound"
              unoptimized
              width={150}
              height={150}
              className="max-h-[150px] max-w-[150px] bg-none object-contain"
            />
          )}
        </CardHeader>
        <CardContent className="flex h-16 items-center justify-center text-sm font-bold">
          {title}
        </CardContent>
        <CardFooter className="mx-auto my-auto flex items-center justify-center">
          <div className="flex w-20 items-center justify-center rounded-xl bg-zinc-900 px-2 py-2 text-sm">
            {group}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default SetupCard
