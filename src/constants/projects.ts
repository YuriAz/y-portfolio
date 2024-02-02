import springJwt from '../../public/skills/spring-jwt.png'
import nextPortfolio from '../../public/images/next-portfolio.png'
import {
  nextjs,
  react,
  tailwind,
  java,
  spring,
  springsec,
  jwt,
  postgresql
} from './skills'

export const projects = [
  {
    title: 'Next Portfolio',
    image: nextPortfolio,
    summary:
      'A well designed, clean and beautiful professional portfolio. You can see some of my old projects by the projects page and so appreciate the hand made background. Built using Next, React and Tailwindcss.',
    technologies: [nextjs, react, tailwind],
    url: 'https://next-portfolio-yuriaz.vercel.app/'
  },
  {
    title: 'Spring User Auth with JWT',
    image: springJwt,
    summary:
      'This project is an API built using Java, Spring Boot, PostgresSQL as the database, and Spring Security and JWT for authentication control. Have features like user registration and login with JWT authentication, password encryption using BCrypt, role-based authorization with Spring Security, customized access denied handling, logout mechanism and refresh token.',
    technologies: [java, spring, springsec, jwt, postgresql],
    url: 'https://github.com/YuriAz/spring-jwt-authentication'
  }
]
