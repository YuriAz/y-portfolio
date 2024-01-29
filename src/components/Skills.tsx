'use client'

import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../../typings'

type Props = {
  skills: SkillType[]
}

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col justify-center items-center text-center mx-auto min-h-screen max-w-[2000px] md:text-left xl:flex-row xl:px-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-basic text-2xl dark:text-dark">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-basic text-sm dark:text-dark">
        Hover over a skill to know more
      </h3>

      <div className="mt-40 grid grid-cols-4 gap-5 items-center mx-3">
        {skills?.slice(0, skills?.length / 2).map(skill => (
          <Skill key={skill?._id} skill={skill} />
        ))}
        {skills?.slice(skills?.length / 2, skills.length).map(skill => (
          <Skill key={skill?._id} skill={skill} directionLeft />
        ))}
      </div>

      <div className="w-full h-[300px] absolute left-0 top-[36%] bg-primary/10 -skew-y-[10deg] dark:bg-dark/60" />
    </motion.div>
  )
}
