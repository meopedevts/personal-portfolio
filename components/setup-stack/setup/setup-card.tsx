import { GetSetupType } from '@/types/notion-setup-types'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import NotFound from '@/public/img/notfound.svg'
import Image from 'next/image'
import Link from 'next/link'

const SetupCard = ({ title, group, image, buy }: GetSetupType) => {
  return (
    <Link href={buy !== undefined ? buy : '/setup'} target="_blank">
      {/* <Card className="dark mx-auto h-[320px] w-[232px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105"> */}
      <Card className="dark mx-auto h-[260px] w-[154px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 md:h-[320px] md:w-[232px]">
        <CardHeader className="flex min-h-[144px] items-center justify-center md:min-h-[198px]">
          {image !== undefined ? (
            <Image
              src={image}
              alt={title}
              unoptimized
              width={150}
              height={150}
              className="max-h-[90px] max-w-[90px] bg-none object-contain md:max-h-[150px] md:max-w-[150px]"
            />
          ) : (
            <Image
              src={NotFound}
              alt="NotFound"
              unoptimized
              width={150}
              height={150}
              className="max-h-[90px] max-w-[90px] bg-none object-contain md:max-h-[150px] md:max-w-[150px]"
            />
          )}
        </CardHeader>
        <CardContent className="flex h-16 items-center justify-center text-center font-bold">
          {title}
        </CardContent>
        <CardFooter className="mx-auto my-auto flex items-center justify-center">
          <div className="flex w-auto items-center justify-center rounded-lg border border-zinc-800 px-4 py-2 text-xs font-semibold capitalize">
            {group}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default SetupCard
