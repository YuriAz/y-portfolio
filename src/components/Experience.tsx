'use client'

import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../../typings'

type Props = {
  experiences: Experience[]
}

export default function Experience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-left overflow-hidden max-w-full mx-auto px-10 items-center justify-evenly md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-basic text-2xl sm:tracking-[20px]">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-basic/20 scrollbar-thumb-primary/80">
        {experiences?.map(experience => (
          <ExperienceCard key={experience?._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}
