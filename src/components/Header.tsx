'use client'

import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import { AiFillHome } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Social } from '../../typings'
import Switch from 'react-switch'

type Props = {
  socials: Social[]
  toggleTheme(): void
  theme: string
}

export default function Header({ socials, toggleTheme, theme }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center backdrop-blur-md sm:backdrop-blur-0">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center dark:space-x-1 ml-[-17px] sm:ml-0"
      >
        {socials?.map(social => (
          <motion.div key={social?._id} whileHover={{ y: -10 }}>
            <SocialIcon
              url={social?.url}
              network={
                social?.url === 'https://wa.me/5551998667327' ? 'whatsapp' : ''
              }
              fgColor="silver"
              bgColor="transparent"
              target="_blank"
              className="dark:bg-dark dark:rounded-full"
            />
          </motion.div>
        ))}
        <motion.div
          key={1}
          whileHover={{ y: -10 }}
          className="w-10 h-10 flex items-center justify-center sm:hidden"
        >
          <Link href="#hero">
            <AiFillHome className="w-7 h-12 dark:text-dark" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center cursor-pointer pr-5 space-x-2 sm:space-x-4"
      >
        <div className="flex items-center justify-center z-50">
          <Switch
            onChange={toggleTheme}
            checked={theme === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={17}
            width={30}
            handleDiameter={13}
            offColor="#eceff1"
            onColor="#02032b"
            offHandleColor="#02032b"
            onHandleColor="#eceff1"
            className="cursor-pointer"
          />
        </div>

        <motion.div
          whileHover={{ x: [20, -20, 15, -15, 10, -10, 5, -5, 0] }}
          className="dark:space-x-2"
        >
          <SocialIcon
            className="cursor-pointer dark:bg-dark dark:rounded-full mr-[-20px] sm:mr-0"
            network="email"
            fgColor="silver"
            bgColor="transparent"
            url="#contact"
          />

          <p className="uppercase hidden md:inline-flex text-sm text-gray-300 dark:text-dark">
            <Link href="#contact">Get In Touch</Link>
          </p>
        </motion.div>
      </motion.div>
    </header>
  )
}
