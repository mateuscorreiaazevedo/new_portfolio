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
import { useScroll, useTransform, motion } from 'framer-motion'
import { Center, CenterProps } from '@chakra-ui/react'

// React
import { ContactMe } from '../../button-contact'
import React from 'react'

export const HomeLayout = () => {
  const MotionCenter = motion<CenterProps>(Center)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 800], [1, 0])

  return (
    <MotionCenter
      style={{ opacity: opacity as unknown as number }}
      position="relative"
      as="section"
      id="home"
      bg="blue.300"
      w="full"
      h="100vh"
    >
      <CircleBlue />
      <CircleOrange />
      <CircleYellow />
      <CirclePink />
      <ContainerHome>
        <Hero />
        <NavHero />
        <ContactMe absolute />
      </ContainerHome>
    </MotionCenter>
  )
}
