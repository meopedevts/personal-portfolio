import Link from 'next/link'
import NavBarMenu from '@/components/navbar-menu'
import { Glasses } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="mx-36 flex h-28 items-center justify-between">
      <Link href="#" className="flex items-center gap-2">
        <h1 className="text-5xl">
          <Glasses size={48} />
        </h1>
        <h2 className="font-semibold">meopedevts</h2>
      </Link>
      <NavBarMenu />
    </div>
  )
}

export default Navbar
