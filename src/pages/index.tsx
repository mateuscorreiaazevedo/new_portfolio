// Components
import { AboutMeLayout } from '../components/layouts/about'
import { SkillsLayout } from '../components/layouts/skills'
import { HomeLayout } from '../components/layouts/home'
import { Header } from '../components/header'
import { Box } from '@chakra-ui/react'

// Next & React imports
import Head from 'next/head'
import React from 'react'

// Utils
import useScrollSnap from 'react-use-scroll-snap'

// Types
import { SkillProps } from '../types/skills'
import { GetStaticProps } from 'next'

// Services
import { SkillService } from '../services/skill-service'
import { ProjectService } from '../services/project-service'
import { ProjectProps } from '../types/projects'
import { ProjectLayout } from '../components/layouts/projects'

type Props = {
  skills: SkillProps[]
  projects: ProjectProps[]
}

function Main ({ skills, projects }: Props) {
  const ref = React.useRef(null)
  useScrollSnap({ ref, duration: 5, delay: 0 })

  return (
    <>
      <Head>
        <title>Mateus Dev | Portfólio</title>
      </Head>
      <Box w="full" minH="full" ref={ref} overflowY="hidden" overflowX="hidden" position="relative" zIndex="base">
        <HomeLayout />
        <Header />
        <AboutMeLayout />
        <SkillsLayout skills={skills} />
        <ProjectLayout projects={projects} />
      </Box>
    </>
  )
}

export default Main

export const getStaticProps: GetStaticProps = async () => {
  const skills = await SkillService.getAll()
  const projects = await ProjectService.getAll()
  return {
    props: {
      skills,
      projects
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}
