// Stylings
import { CircleOrange } from '../../circles/orange'
import { CircleYellow } from '../../circles/yellow'
import { CirclePink } from '../../circles/pink'
import { CircleBlue } from '../../circles/blue'
// Components
import { ContainerHome } from '../../container'
import { NavHero } from '../../hero/nav'
import { Hero } from '../../hero'

// ChakraUI and Motion
import { Center } from '@chakra-ui/react'

// React
import React from 'react'
import { ContactMe } from '../../button-contact'

export const HomeLayout = () => {
  return (
    <Center position="relative" as="section" id="home" bg="blue.300" w="full" h="100vh">
      <CircleBlue />
      <CircleOrange />
      <CircleYellow />
      <CirclePink />
      <ContainerHome>
        <Hero />
        <NavHero />
        <ContactMe absolute />
      </ContainerHome>
    </Center>
  )
}
