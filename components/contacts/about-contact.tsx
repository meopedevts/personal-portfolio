import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import memoji from '@/public/img/memoji-computing.png'

const AboutContact = () => {
  return (
    <Card className="dark flex-1 overflow-hidden bg-neutral-900 md:max-w-lg">
      <CardTitle className="flex items-center justify-center py-8">
        Hello, I&apos;m meopedevts
      </CardTitle>
      <CardContent className="flex items-center justify-center">
        <Image src={memoji} alt="memoji" width={200} height={200} />
      </CardContent>
      <CardFooter className="flex items-center justify-center text-center text-sm text-zinc-400">
        Construindo projetos de alta perfomance e experiências digitais
        incríveis que ajudam a aumentar a presença da sua marca online e a
        melhorar a experiência do usuário.
      </CardFooter>
    </Card>
  )
}

export default AboutContact
