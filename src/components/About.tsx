// @ts-nocheck

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import me from '../../public/images/Me1.jpeg'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen px-10 relative flex flex-col text-center justify-evenly items-center md:text-left md:flex-row xl:px-40 dark:text-dark"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl z-10">
        About
      </h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="-mb-20 mt-20 flex-shrink-0 xl:pt-20 z-10"
      >
        <Image
          src={me}
          alt="me"
          className="rounded-full object-cover sm:w-56 sm:h-56 md:rounded-lg md:w-64 md:h-96 md:mb-32 xl:rounded-md xl:w-[500px] xl:h-[500px]"
          sizes="(min-width: 1280px) 500px,(min-width: 768px) 384px, (min-width: 640px) 224px, 128px"
          width={128}
          height={128}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="space-y-10 px-0 md:px-10 z-10"
      >
        <h4 className="text-3xl font-semibold sm:text-4xl">
          Here is a{' '}
          <span className="underline decoration-primary/50">little</span>{' '}
          background
        </h4>

        <p className="text-base sm:text-lg">
          Yooo, I'm Yuri Diogo and I'm a developer. Coding taught me to be more
          creative, focused and comprehensible. I like to invest my time
          learning new things about programming and how I can apply it to real
          projects, and I believe that the only way to really learn is building
          real projects. Come and take a look at some of my work and enjoy your
          time.
        </p>
      </motion.div>

      <div className="w-full h-[300px] absolute left-0 top-[36%] bg-primary/10 -skew-y-[10deg] dark:bg-dark/60" />
    </motion.div>
  )
}
