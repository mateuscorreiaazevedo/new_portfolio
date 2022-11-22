import { Center, Heading } from '@chakra-ui/react'
import React from 'react'
import { HighTitle } from '../../highlight-title'

export const SkillsLayout = () => {
  return (
    <Center as="section" id="skills" h="100vh">
      <Heading>
        <HighTitle query="S" text="Skill" />s
      </Heading>
    </Center>
  )
}
