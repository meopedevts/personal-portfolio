'use client'

import { forwardRef, useState, useEffect, ReactNode } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { ChevronDown } from 'lucide-react'

interface menuRoutesProps {
  title: string
  description: string
  href: string
}

interface dynamicRoutesProps {
  title: string
  menu: menuRoutesProps[]
}

interface staticRoutesProps {
  title: string
  href: string
}

type ListItemType = {
  className?: string
  title: string
  href: string
  children: ReactNode
}

const dynamicRoutes: dynamicRoutesProps[] = [
  {
    title: 'Sobre',
    menu: [
      {
        title: 'Sobre mim',
        description: 'Conheça um pouco mais sobre mim e o que eu faço.',
        href: '/about',
      },
      {
        title: 'Projetos',
        description:
          'Todos os projetos que venho desenvolvendo durante a minha jornada.',
        href: '/projects',
      },
    ],
  },
  {
    title: 'Setup',
    menu: [
      {
        title: 'Setup',
        description:
          'Os principais equipamentos que utilizo em meu setup e recomendo.',
        href: '/setup',
      },
      {
        title: 'Stack',
        description: 'Apps e serviços que uso para construir coisas legais.',
        href: '/stack',
      },
    ],
  },
]

const staticRoutes: staticRoutesProps[] = [
  {
    title: 'Contato',
    href: '/contacts',
  },
]

const NavBarMenu = () => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return (
      <main className="dark">
        <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
          {dynamicRoutes.map((route, index) => (
            <li key={index}>
              <button className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-semibold transition-colors data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                {route.title}{' '}
                <ChevronDown
                  className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </button>
            </li>
          ))}
          {staticRoutes.map((route, index) => (
            <li key={index}>
              <a href={route.href}>
                <button className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-semibold transition-colors data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  {route.title}
                </button>
              </a>
            </li>
          ))}
        </ul>
      </main>
    )
  }

  return (
    <NavigationMenu className="dark">
      <NavigationMenuList>
        {dynamicRoutes.map((route, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger className="font-semibold">
              {route.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-3 p-4 md:w-[280px]">
                {route.menu.map((menu, index) => (
                  <ListItem key={index} href={menu.href} title={menu.title}>
                    {menu.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        {staticRoutes.map((route, index) => (
          <NavigationMenu key={index}>
            <Link href={route.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {route.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenu>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = ({ className, title, href, children }: ListItemType) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
        >
          <div className="text-sm font-normal leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
ListItem.displayName = 'ListItem'

export default NavBarMenu
