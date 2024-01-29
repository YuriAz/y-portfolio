import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ['20%', '20%', '50%', '80%', '20%']
        }}
        transition={{ duration: 2.5 }}
        className="relative flex justify-center items-center"
      >
        <div className="absolute border border-secondary rounded-full h-[200px] w-[200px] mt-[350px] animate-ping dark:border-dark/20" />
        <div className="absolute border border-secondary rounded-full h-[300px] w-[300px] mt-[350px] animate-ping dark:border-dark/20" />
        <div className="absolute border border-secondary rounded-full h-[500px] w-[500px] mt-[350px] animate-ping dark:border-dark/20" />
        <div className="absolute sm:border border-primary opacity-20 rounded-full h-[650px] w-[650px] mt-[380px] animate-pulse dark:border-dark" />
        <div className="absolute border border-secondary rounded-full h-[800px] w-[800px] mt-[350px] animate-ping dark:border-dark/20" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          rotateY: ['360deg', '-360deg']
        }}
        transition={{ duration: 2.5 }}
        className="relative flex justify-center items-center"
      >
        <div className="absolute border border-primary opacity-20 rotate-45 h-[400px] w-[400px] mt-[350px] animate-pulse dark:border-dark" />
      </motion.div>
    </>
  )
}
