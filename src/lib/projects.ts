import {
  nextPortfolio,
  React,
  NextJS,
  Tailwindcss,
  TypeScript
} from '@/lib/images'

export const projects = [
  {
    image: nextPortfolio,
    title: 'Next Portfolio',
    technologies: ['React', 'NextJS', 'TypeScript', 'Tailwindcss'],
    logo: [React, NextJS, TypeScript, Tailwindcss],
    summary:
      'This project do not have a live demo because it was my official portfolio and I had to switch the environment variable when I built my actual portfolio.',
    url: 'https://www.yuridiogo.com',
    code: 'https://github.com/YuriAz/next-portfolio',
    isDisable: true
  }
]
