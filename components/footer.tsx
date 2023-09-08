import { Github, Linkedin, LucideIcon, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import Link from 'next/link'
import TallyForm from '@/components/tally-form'

interface socialMediaProps {
  icon: LucideIcon
  href: string
}

const socialMedia: socialMediaProps[] = [
  {
    icon: Github,
    href: 'https://github.com/meopedevts',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/meopedevts/',
  },
]

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl items-center px-5 py-8 xl:px-0">
      <Card className="dark overflow-hidden bg-neutral-900">
        <CardHeader className="pb-4 font-bold">
          VAMOS CONSTRUIR ALGO JUNTOS?
        </CardHeader>
        <CardDescription className="flex flex-col px-6 pb-4">
          Se você tem algum projeto em mente, ou apenas quer bater um papo,
          sinta-se à vontade para me enviar uma mensagem.
        </CardDescription>
        <CardContent className="px-4">
          <TallyForm>
            <Button className="flex items-center justify-center gap-1 rounded-3xl px-5">
              <span className="text-base font-medium">Fale comigo</span>
              <Send />
            </Button>
          </TallyForm>
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-2 border-t-[1px] border-t-zinc-800 p-4">
          {socialMedia.map((media, index) => (
            <Button
              key={index}
              size={'icon'}
              className="border border-zinc-800 bg-zinc-950 text-muted-foreground hover:bg-zinc-800"
            >
              <Link href={media.href} target="_blank">
                <media.icon />
              </Link>
            </Button>
          ))}
        </CardFooter>
      </Card>
    </footer>
  )
}

export default Footer
