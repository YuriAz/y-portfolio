'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
  projects: Project[]
}

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left max-w-full items-center justify-evenly mx-auto md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-basic text-2xl z-30 dark:text-dark">
        Projects
      </h3>

      <div className="w-full relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-40 scrollbar-thin scrollbar-track-basic/20 scrollbar-thumb-primary/80 dark:scrollbar-track-basic/5 dark:scrollbar-thumb-dark/80">
        {projects?.map((project, index) => (
          <div
            key={project?._id}
            className="w-screen h-screen mt-12 p-2 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center sm:mt-24 sm:p-20 md:p-44 dark:text-dark"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={urlFor(project?.image).url()}
                alt={`Project ${project?.title}`}
                className="h-40 w-60 min-[766px]:h-40 min-[766px]:mt-10 min-[800px]:h-72 min-[800px]:w-[32rem] rounded-sm md:object-cover"
                sizes="(min-width: 1280px) 500px,(min-width: 768px) 384px, 240px, (min-width: 640px) 224px, 128px"
                width={240}
                height={160}
              />
              {/* <video
                width="384"
                autoPlay
                loop
                muted
                className="h-48 w-60 md:h-80 md:w-96 object-cover border border-primary dark:border-none"
              >
                <source src="coming-soon.mp4" type="video/mp4" />
              </video> */}
            </motion.div>

            <div className="max-w-6xl space-y-2 px-0 md:px-10">
              <h4 className="text-2xl font-semibold text-center sm:text-4xl">
                Case {index + 1} of {projects.length}:{' '}
                <span className="underline decoration-2 decoration-primary/50">
                  {project?.title}
                </span>{' '}
              </h4>

              <div className="flex items-center justify-center space-x-2 py-1">
                {project?.technologies?.map(technology => (
                  <Image
                    key={technology?._id}
                    src={urlFor(technology?.image).url()}
                    alt=""
                    className="w-10 h-10"
                    width={40}
                    height={40}
                  />
                ))}
              </div>

              <div className="flex flex-wrap text-base text-center sm:text-lg md:text-left">
                <p className="text-center overflow-x-hidden">
                  {project.summary}
                </p>
              </div>

              <div className="flex items-center justify-center pt-4">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Link
                    className="p-3 bg-primary rounded-md text-black text-lg font-bold dark:bg-dark dark:text-primary"
                    href={project.linkToBuild}
                    target="_blank"
                  >
                    Live Demo
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-[300px] absolute left-0 top-[36%] bg-primary/10 -skew-y-[10deg] dark:bg-dark/60" />
    </motion.div>
  )
}
