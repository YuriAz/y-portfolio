import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { PageInfo, Project, Skill, Social } from '../../typings'
import { fetchPageInfo } from '../../utils/fetchPageInfo'
import { fetchSkills } from '../../utils/fetchSkills'
import { fetchProjects } from '../../utils/fetchProjects'
import { fetchSocials } from '../../utils/fetchSocials'
import { urlFor } from '../../sanity'

type Props = {
  pageInfo: PageInfo
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

export default function Home({ pageInfo, skills, projects, socials }: Props) {
  const [theme, setTheme] = useState('')
  const toggleTheme = () => setTheme(theme === '' ? 'dark' : '')
  let actualTheme = theme

  return (
    <main
      className={`${theme} ${
        theme ? 'bg-primary' : 'bg-dark'
      } text-white h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-light/20 scrollbar-thumb-primary/80 scroll-smooth relative`}
    >
      <Head>
        <title>YDs Portfolio</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <Header socials={socials} toggleTheme={toggleTheme} theme={actualTheme} />

      <section id="hero" className="dark:bg-primary">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="dark:bg-primary">
        <About pageInfo={pageInfo} />
      </section>

      {/* <section id="experience" className="">
        <Experience experiences={experiences} />
      </section> */}

      {/* <section id="skills" className="dark:bg-primary">
        <Skills skills={skills} />
    </section> */}

      <section id="projects" className="dark:bg-primary">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="dark:bg-primary">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <footer className="hidden sm:flex items-center justify-center sticky bottom-4 z-50">
        <Link href="#hero">
          <Image
            src={urlFor(pageInfo?.heroImage).url()}
            alt="logo"
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            width={40}
            height={40}
          />
        </Link>
      </footer>
    </main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials
    }
  }
}
