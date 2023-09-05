'use client'

import { forwardRef, useState, useEffect } from 'react'
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
    return null
  }

  return (
    <NavigationMenu className="dark">
      <NavigationMenuList className="mr-44">
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
            <Link href={route.href}>
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

const ListItem = forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-normal leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default NavBarMenu
