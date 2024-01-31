import springJwt from '../../public/skills/spring-jwt.png'
import { java, spring, springsec, jwt, postgresql } from './skills'

export const projects = [
  {
    title: 'Spring User Auth with JWT',
    image: springJwt,
    summary:
      'This project is an API built using Java, Spring Boot, PostgresSQL as the database, and Spring Security and JWT for authentication control. Have features like user registration and login with JWT authentication, password encryption using BCrypt, role-based authorization with Spring Security, customized access denied handling, logout mechanism and refresh token.',
    technologies: [java, spring, springsec, jwt, postgresql],
    url: 'https://github.com/YuriAz/spring-jwt-authentication'
  }
]
