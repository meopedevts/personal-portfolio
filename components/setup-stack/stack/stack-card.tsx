import { GetStackType } from '@/types/notion-setup-types'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import NotFound from '@/public/img/notfound.svg'
import Image from 'next/image'
import Link from 'next/link'

const StackCard = ({ title, group, image, site }: GetStackType) => {
  return (
    <Link href={site !== undefined ? site : '/setup'} target="_blank">
      <Card className="dark mx-auto h-[260px] w-[150px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 md:w-[232px]">
        <CardHeader className="flex min-h-[144px] items-center justify-center">
          {image !== undefined ? (
            <Image
              src={image}
              alt={title}
              unoptimized
              width={90}
              height={90}
              className="max-h-[90px] max-w-[90px] bg-none object-contain"
            />
          ) : (
            <Image
              src={NotFound}
              alt="NotFound"
              unoptimized
              width={90}
              height={90}
              className="max-h-[90px] max-w-[90px] bg-none object-contain"
            />
          )}
        </CardHeader>
        <CardContent className="flex h-16 items-center justify-center text-center font-bold">
          {title}
        </CardContent>
        <CardFooter className="mx-auto my-auto flex items-center justify-center">
          <div className="flex w-auto items-center justify-center truncate rounded-lg border border-zinc-800 px-4 py-2 text-xs font-semibold capitalize">
            {group}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default StackCard
