import { HighTitle } from '../../highlight-title'
import { ProjectCard } from '../../project-card'
import { Box, Grid, Heading } from '@chakra-ui/react'
import React from 'react'

// Slick-carousel
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'

// Types
import { ProjectProps } from '../../../types/projects'
import Image from 'next/image'

type Props = {
  projects: ProjectProps[]
}

export const ProjectLayout = ({ projects }: Props) => {
  const config = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000
  }

  return (
    <Box as="section" id="projects" maxW="1340px" mx="auto" minH="100vh" pt="100px">
      <Heading ml="20" fontSize="2xl" fontWeight="normal">
        <HighTitle query="P" text="Projects" />
      </Heading>
      <Box maxW="1040px" mt={{ md: 6, base: 32 }} mx={{ md: 40, base: 6 }}>
        <Slider {...config}>
          {projects.map((project: ProjectProps, key: React.Key) => (
            <ProjectCard {...project} key={key} />
          ))}
        </Slider>
      </Box>
    </Box>
  )
}
