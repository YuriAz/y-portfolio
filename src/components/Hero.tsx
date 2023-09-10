'use client'

import Image from 'next/image'
import BackgroundCircles from './BackgroundCircles'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { PageInfo } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo?.name}`,
      'Life Is Unique And Beaultiful.tsx',
      '<WithCodeIsEvenBetter />'
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className="h-screen max-h-screen space-y-4 flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <Image
        className="relative rounded-full h-60 w-60 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="logo"
        width={240}
        height={240}
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-basic pb-2 tracking-[8px] sm:tracking-[15px] dark:text-dark">
          {pageInfo?.role}
        </h2>

        <h1 className="text-2xl font-semibold sm:text-3xl lg:text-4xl dark:text-dark">
          <span>{text}</span>
          <Cursor cursorColor="#eceff1" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          {/* <a href="#experience">
            <button className="heroButton">Experience</button>
          </a> */}
          {/* <a href="#skills">
            <button className="heroButton">Skills</button>
          </a> */}
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  )
}
