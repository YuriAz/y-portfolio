'use client'

import { AiFillHome } from 'react-icons/ai'
import { IoChatbubblesSharp, IoDiamond } from 'react-icons/io5'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Separator } from './ui/separator'

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <div className="w-48">
      <Link
        href="/"
        className={`${
          pathname == '/' ? 'text-white font-batman' : ''
        } flex items-center gap-5 mb-1 -skew-y-12 transition-all hover:text-white/80 hover:text-2xl`}
      >
        <AiFillHome /> Home
      </Link>

      <Separator
        className={`${
          pathname == '/' ? 'bg-white h-1 rounded-md' : 'bg-zinc-700'
        } mb-8 -skew-y-12`}
      />

      <Link
        href="/projects"
        className={`${
          pathname == '/projects' ? 'text-white font-batman' : ''
        } flex items-center gap-5 mb-1 -skew-y-12 transition-all hover:text-white/80 hover:text-2xl`}
      >
        <IoDiamond /> Projects
      </Link>

      <Separator
        className={`${
          pathname == '/projects' ? 'bg-white h-1 rounded-md' : 'bg-zinc-700'
        } mb-8 -skew-y-12`}
      />

      <Link
        href="/contact"
        className={`${
          pathname == '/contact' ? 'text-white font-batman' : ''
        } flex items-center gap-5 mb-1 -skew-y-12 transition-all hover:text-white/80 hover:text-2xl`}
      >
        <IoChatbubblesSharp /> Contact
      </Link>

      <Separator
        className={`${
          pathname == '/contact' ? 'bg-white h-1 rounded-md' : 'bg-zinc-700'
        } mb-8 -skew-y-12`}
      />
    </div>
  )
}
