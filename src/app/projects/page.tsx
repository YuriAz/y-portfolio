import SkillHolder from '@/components/SkillHolder'
import { projects } from '@/lib/projects'
import {
  nextPortfolio,
  React,
  NextJS,
  Tailwindcss,
  TypeScript
} from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'
import { randomUUID } from 'crypto'

export default function page() {
  return (
    <section className="mobile-container overflow-y-scroll scrollbar-none md:container">
      <div className="w-full pb-20 space-y-3">
        <h2 className="text-4xl font-semibold font-batman">Projects</h2>

        <div className="h-1 w-44 bg-white"></div>
      </div>

      <div className="flex flex-wrap gap-5">
        {projects?.map(({ image, title, summary, url, code, isDisable }) => (
          <div
            className="flex flex-col justify-between mb-10 md:mb-0 md:w-[310px] md:h-[390px] lg:w-[370px] lg:h-[450px]"
            key={randomUUID()}
          >
            <div className="relative h-[74%] border border-white rounded-md overflow-hidden">
              <Image
                src={image}
                alt="Project logo"
                quality={100}
                width={1575}
                height={734}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              <div className="absolute top-0 h-full text-justify p-8 bg-black/60 transition-all opacity-0 hover:opacity-100">
                {summary}
              </div>
            </div>

            <div className="h-[25%] flex flex-col gap-1 items-center">
              <p className="title">
                <span className="font-batman text-xl">{title}</span>
              </p>

              <div className="flex gap-3 text-lg font-semibold">
                <Link
                  href={url}
                  target="_blank"
                  className="p-3 px-7 rounded-md bg-white hover:bg-white/80 text-black"
                >
                  <button disabled={isDisable}>Demo</button>
                </Link>

                <Link
                  href={code}
                  target="_blank"
                  className="p-3 px-7 border border-[#222222] rounded-md bg-white hover:bg-white/80 text-black"
                >
                  Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
