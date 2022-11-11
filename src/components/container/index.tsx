import { VStack } from '@chakra-ui/react'
import React from 'react'
import { animateContainer, MotionCenter } from './animation'

export const ContainerHome = ({ children }) => {
  return (
    <MotionCenter
      animate="visible"
      initial="hidden"
      variants={animateContainer}
      as="main"
      m={{ md: 16, base: 7 }}
      w="100vw"
      h="90vh"
      borderColor="blue.300"
      borderRadius="md"
      bg="whiteAlpha.700"
      borderWidth="2px"
      backdropFilter="auto"
      backdropBlur="md"
      shadow="2xl"
    >
      <VStack>{children}</VStack>
    </MotionCenter>
  )
}
