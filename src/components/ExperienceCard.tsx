import Image from 'next/image'
import { motion } from 'framer-motion'
import { Experience } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 mt-20 h-[550px] w-[350px] sm:w-[500px] md:w-[600px] xl:w[1000px] snap-center p-10 bg-easyDark opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className=""
      >
        <Image
          src={urlFor(experience?.companyImage).url()}
          alt=""
          className="w-32 h-32 rounded-full object-cover object-center"
          width={128}
          height={128}
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience?.jobTitle}</h4>

        <p className="font-bold text-lg mt-1">{experience?.company}</p>

        <div className="flex space-x-2 my-2">
          {experience?.technologies.map(technology => (
            <Image
              key={technology?._id}
              src={urlFor(technology?.image).url()}
              alt={technology?.title}
              className="w-10 h-10 rounded-full"
              width={128}
              height={128}
            />
          ))}
        </div>

        <p className="uppercase py-3">
          {new Date(experience?.dateStarted).toDateString()} -{' '}
          {experience?.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience?.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-2 ml-5 text-base overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-primary/80">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
