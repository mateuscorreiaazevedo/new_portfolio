import { animationContainer, animationHeading, MotionBox, MotionGrid, MotionHeading } from './animation'
import { Box, Center, Flex } from '@chakra-ui/react'
import { SkillProps } from '../../../types/skills'
import { HighTitle } from '../../highlight-title'
import { SkillCard } from '../../skill-card'
import React from 'react'

type Props = {
  skills: SkillProps[]
}

export const SkillsLayout = ({ skills }: Props) => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      as="section"
      id="skills"
      minH="100vh"
      pt="100px"
      maxW="1340px"
      mx="auto"
      transformOrigin="0%"
    >
      <Box mx={20} mt={20} maxW="1340px">
        <MotionHeading
          textAlign={{ md: 'start', base: 'center' }}
          variants={animationHeading}
          fontSize="2xl"
          fontWeight="normal"
        >
          <HighTitle query="S" text="Skill" />s
        </MotionHeading>
        <Center mt={10}>
          <MotionGrid
            variants={animationContainer}
            gap={{ md: 20, base: 1 }}
            justifyContent="center"
            maxW="1340px"
            flexWrap="wrap"
          >
            {skills.map((skill: SkillProps, key: React.Key) => (
              <SkillCard {...skill} key={key} />
            ))}
          </MotionGrid>
        </Center>
      </Box>
    </MotionBox>
  )
}
