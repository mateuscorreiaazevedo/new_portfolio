import { Box, Center, Flex, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react'
import { HighTitle } from '../../highlight-title'
import React from 'react'

import Slider from 'react-slick'
import { ProjectProps } from '../../../types/projects'
import Image from 'next/image'

// Slick-carousel
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
  projects: ProjectProps[]
}

export const ProjectLayout = ({ projects }: Props) => {
  const config = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000
  }

  return (
    <Box as="section" id="projects" maxW="1340px" mx="auto" h="100vh" pt="100px">
      <Heading ml="20" fontSize="2xl" fontWeight="normal">
        <HighTitle query="P" text="Projects" />
      </Heading>
      <Box maxW="1040px" mt="32" mx="auto">
        <Slider {...config}>
          {projects.map((project: ProjectProps, key: React.Key) => (
            <Box key={key} position="relative" width="full" h="full">
              <Center minW={{ md: '650px', base: 'full' }} cursor="pointer">
                <Image
                  style={{ borderRadius: '20px', margin: '0 auto', objectFit: 'contain' }}
                  src={project.image}
                  alt={project.namedImage}
                  width={650}
                  height={650}
                />
              </Center>
              <Center position="absolute" inset={0}>
                <VStack
                  spacing={{ md: 8 }}
                  p={20}
                  justifyContent="center"
                  cursor="pointer"
                  borderRadius="md"
                  opacity={0}
                  transitionDuration="200ms"
                  w={{ md: '650px', base: 'full' }}
                  h="full"
                  bg="blackAlpha.500"
                  backdropFilter="auto"
                  backdropBlur="sm"
                  _hover={{
                    opacity: 1
                  }}
                >
                  <Heading>{project.name}</Heading>
                  <Text fontSize={{ md: 'md', base: 'sm' }}>{project.description}</Text>
                  <Link href={project.link} target="_blank">
                    Acessar projeto
                  </Link>
                </VStack>
              </Center>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  )
}
