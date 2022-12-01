// Components
import { Box, Center, Heading, Link, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

// Types
import { ProjectProps } from '../../types/projects'

export const ProjectCard = (props: ProjectProps) => {
  const { description, image, namedImage, link, name } = props
  return (
    <Box position="relative" width="full" h="full" zIndex="base">
      <Image
        style={{ borderRadius: '20px', margin: '0 auto', zIndex: '0' }}
        src={image}
        alt={namedImage}
        width={600}
        height={600}
      />
      <Center position="absolute" inset={0} zIndex="base">
        <VStack
          spacing={{ md: 8 }}
          p={20}
          justifyContent="center"
          cursor="pointer"
          borderRadius="md"
          opacity={0}
          transitionDuration="200ms"
          w={{ md: '600px', base: 'full' }}
          h="full"
          bg="blackAlpha.700"
          backdropFilter="auto"
          backdropBlur="sm"
          _hover={{
            opacity: 1
          }}
        >
          <Heading fontSize={{ md: '2xl', base: 'md' }}>{name}</Heading>
          <Text fontSize={{ md: 'md', base: 'sm' }} textAlign={{ md: 'start', base: 'center' }}>
            {description}
          </Text>
          <Link
            mt={{ md: 0, base: '2' }}
            position="relative"
            transition="all 300ms ease-in"
            href={link}
            target="_blank"
            _hover={{ color: 'blue.300', fontSize: 'md' }}
            css={`
              &:hover {
                text-decoration: none;
                .line {
                  width: 100%;
                }
              }
            `}
          >
            Acessar projeto
            <Box className="line" w={0} h="3px" bg="blue.300" position="absolute" transition="width 200ms ease-out" />
          </Link>
        </VStack>
      </Center>
    </Box>
  )
}
