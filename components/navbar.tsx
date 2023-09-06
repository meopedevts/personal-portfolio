import Link from 'next/link'
import NavBarMenu from '@/components/navbar-menu'
import { Glasses } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="flex h-28 min-w-[390px] items-center justify-between px-2 lg:min-w-[1024px] lg:p-0">
      <Link href="#" className="flex items-center gap-2">
        <h1 className="text-5xl max-sm:ml-7">
          <Glasses size={48} />
        </h1>
        <h2 className="font-semibold max-sm:hidden">meopedevts</h2>
      </Link>
      <NavBarMenu />
    </div>
  )
}

export default Navbar
