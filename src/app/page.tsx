import Link from 'next/link'
import Image from 'next/image'
import { React, NextJS, Tailwindcss, TypeScript } from '@/lib/images'
import SkillHolder from '@/components/SkillHolder'

export default function Home() {
  return (
    <main className="mobile-container scrollbar-none md:container">
      <div className="h-full flex flex-col gap-10 md:gap-32">
        <h1
          refl-text="Yuri Diogo"
          className="relative text-4xl font-bold font-batman md:text-7xl"
        >
          Yuri Diogo
        </h1>

        <div className="flex flex-col gap-10">
          <h2 className="text-2xl font-semibold text-white md:text-4xl">
            Frontend Developer
          </h2>

          <div className="flex-col gap-4 text-lg font-medium md:flex md:flex-row">
            <div className="w-full p-2 text-base text-justify md:w-[50%] md:text-lg">
              <p>This is my hub. Be welcome!</p>

              <p>
                Here you will see beautiful and interactive interfaces that will meet customer satisfaction and joy.
                Everything that is done with passion and patience will be seen with good eyes.
              </p>
            </div>

            <div className="w-full h-[0.10rem] bg-white md:w-[0.10rem] md:h-full"></div>

            <div className="w-full p-2 space-y-5 md:w-[30%]">
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
