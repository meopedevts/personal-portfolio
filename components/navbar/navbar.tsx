import Link from 'next/link'
import NavBarMenu from '@/components/navbar/navbar-menu'
import { Glasses } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-8 md:gap-20 xl:px-0">
      <Link href="/" className="flex items-center gap-2">
        <h1 className="text-5xl">
          <Glasses size={48} />
        </h1>
        <h2 className="font-semibold max-sm:hidden">meopedevts</h2>
      </Link>
      <NavBarMenu />
    </div>
  )
}

export default Navbar
