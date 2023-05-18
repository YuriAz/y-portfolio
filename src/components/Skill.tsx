import { motion } from 'framer-motion'
import { Skill } from '../../typings'
import { urlFor } from '../../sanity'
import Image from 'next/image'

type Props = {
  directionLeft?: boolean
  skill: Skill
}

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer z-10">
      <motion.div
        initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center"
      >
        <Image
          sizes="(min-width: 1280px) 128px,(min-width: 768px) 112px, (min-width: 640px) 96px, 64px"
          width={64}
          height={64}
          src={urlFor(skill?.image).url()}
          alt={skill?.title}
          className="rounded-full border border-basic bg-dark object-cover w-16 h-16 filter group-hover:grayscale transition duration-300 ease-in-out sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 dark:border-none"
        />
        <p className="text-primary dark:text-dark lg:hidden">{skill?.title}</p>
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white rounded-full h-16 w-16 transition duration-300 ease-in-out z-20 sm:w-24 sm:h-24 md:h-28 md:w-28 xl:h-32 xl:w-32">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">
            {skill?.title}
          </p>
        </div>
      </div>
    </div>
  )
}
