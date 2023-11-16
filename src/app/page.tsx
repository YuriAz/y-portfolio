import Link from 'next/link'
import Image from 'next/image'
import { React, NextJS, Tailwindcss, TypeScript } from '@/lib/images'
import SkillHolder from '@/components/SkillHolder'

export default function Home() {
  return (
    <main className="container">
      <div className="h-full flex flex-col gap-32">
        <h1
          refl-text="Yuri Diogo"
          className="relative text-7xl font-bold font-batman"
        >
          Yuri Diogo
        </h1>

        <div className="flex flex-col gap-10">
          <h2 className="text-4xl font-semibold text-white">
            Frontend Developer
          </h2>

          <div className="flex gap-4 text-lg font-medium">
            <p className="w-[50%] p-2 text-justify">
              I focus on specializing in frontend, creating beautiful and
              interactive interfaces for better customer satisfaction. One of my
              passions is build and improving my personal projects. I believe
              that the only way to really learn how to code something is doing
              projects by yourself that solve your own problems.
            </p>

            <div className="bg-white w-[0.10rem]"></div>

            <div className="w-[30%] p-2 space-y-5">
              <p className="">Most used techs:</p>

              <div className="flex items-center">
                <SkillHolder title="React">
                  <Image
                    src={React}
                    alt="React"
                    width={40}
                    height={40}
                    priority
                    className="origin-center -rotate-45"
                  />
                </SkillHolder>

                <SkillHolder title="NextJS">
                  <Image
                    src={NextJS}
                    alt="NextJS"
                    width={40}
                    height={40}
                    priority
                    className="origin-center -rotate-45"
                  />
                </SkillHolder>

                <SkillHolder title="Tailwindcss">
                  <Image
                    src={Tailwindcss}
                    alt="Tailwindcss"
                    width={40}
                    height={40}
                    priority
                    className="origin-center -rotate-45"
                  />
                </SkillHolder>

                <SkillHolder title="TypeScript">
                  <Image
                    src={TypeScript}
                    alt="TypeScript"
                    width={40}
                    height={40}
                    priority
                    className="origin-center -rotate-45"
                  />
                </SkillHolder>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-lg font-semibold w-40 py-3 text-center cursor-pointer rounded-full text-black bg-white transition-all animate-bounce hover:bg-slate-300 hover:text-xl"
          >
            HIRE ME
          </Link>
        </div>
      </div>
    </main>
  )
}
