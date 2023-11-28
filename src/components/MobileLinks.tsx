'use client'

import { AiFillHome } from 'react-icons/ai'
import { IoChatbubblesSharp, IoDiamond } from 'react-icons/io5'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileLinks() {
  const pathname = usePathname()

  return (
    <div className="absolute bottom-3 flex mx-[30%] text-2xl px-4 py-1 gap-2 rounded-full bg-stone-700/40 text-white z-50 md:mx-[35%] md:bottom-10 md:px-5 md:py-2 md:gap-5">
      <Link
        href="/"
        className={`${
          pathname == '/' ? 'bg-stone-700/80' : ''
        } rounded-full p-1 cursor-pointer transition-all z-[60] md:p-3`}
      >
        <AiFillHome />
      </Link>

      <Link
        href="/projects"
        className={`${
          pathname == '/projects' ? 'bg-stone-700/80' : ''
        } rounded-full p-1 cursor-pointer transition-all z-[60] md:p-3`}
      >
        <IoDiamond />
      </Link>

      <Link
        href="/contact"
        className={`${
          pathname == '/contact' ? 'bg-stone-700/80' : ''
        } rounded-full p-1 cursor-pointer transition-all z-[60] md:p-3`}
      >
        <IoChatbubblesSharp />
      </Link>
    </div>
  )
}
