import { Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from '../../nav-link'
import { animateNav, MotionHStack, MotionVStack } from './animation'

export const NavHero = () => {
  return (
    <Flex as="nav" h="xl" w="full" justifyContent="center">
      <MotionHStack
        display={{ md: 'flex', base: 'none' }}
        initial="hidden"
        animate="visible"
        variants={animateNav}
        spacing="10"
      >
        <NavLink color="gray.800" link="about" text="About me" />
        <NavLink color="gray.800" link="skills" text="Skills" />
        <NavLink color="gray.800" link="projects" text="Projects" />
      </MotionHStack>
      <MotionVStack
        display={{ md: 'none', base: 'flex' }}
        initial="hidden"
        animate="visible"
        variants={animateNav}
        spacing="5"
      >
        <NavLink color="gray.800" link="about" text="About me" />
        <NavLink color="gray.800" link="skills" text="Skills" />
        <NavLink color="gray.800" link="projects" text="Projects" />
      </MotionVStack>
    </Flex>
  )
}
