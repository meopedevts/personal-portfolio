import { LucideIcon, Mail, Send } from 'lucide-react'
import Link from 'next/link'

interface MediaButtonsProps {
  title: string
  href: string
  icon: LucideIcon
}

const mediaButtons: MediaButtonsProps[] = [
  {
    title: 'Email',
    href: 'mailto:meopedevts.dev@icloud.com?subject=Vim através do seu site e gostaria de [Digite o assunto]',
    icon: Mail,
  },
  {
    title: 'Me mande uma DM',
    href: 'https://www.linkedin.com/in/meopedevts/',
    icon: Send,
  },
]

const MediaContact = () => {
  return (
    <div className="flex-1 space-y-4 py-8 xl:px-0">
      {mediaButtons.map((media, index) => (
        <Link
          key={index}
          href={media.href}
          className="mx-auto flex items-center justify-between rounded-xl bg-zinc-100 px-4 py-4 font-semibold text-zinc-950 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-200 md:mx-8"
        >
          {media.title}
          <media.icon />
        </Link>
      ))}
    </div>
  )
}

export default MediaContact
