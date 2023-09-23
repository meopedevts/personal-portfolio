import { cn } from '@/lib/utils'

interface BulletProps {
  color?: string
}

const Bullet = ({ color }: BulletProps) => {
  let colorClass = 'bg-emerald-500'

  if (color === 'red') {
    colorClass = 'bg-red-500'
  } else if (color === 'green') {
    colorClass = 'bg-emerald-600'
  }

  return (
    <span className="absolute left-0 top-1/2 flex h-2 w-2 -translate-y-1/2 pl-1">
      <span
        className={cn(
          'absolute inline-flex h-full w-full animate-ping rounded-full pl-1 opacity-75',
          colorClass,
        )}
      ></span>
      <span
        className={cn(
          'relative inline-flex h-2 w-2 rounded-full pl-2',
          colorClass,
        )}
      ></span>
    </span>
  )
}

export default Bullet
