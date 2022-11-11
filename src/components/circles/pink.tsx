import { Box, BoxProps } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import React from 'react'

const MotionBox = motion<BoxProps>(Box)

const animation: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8
    }
  }
}
export const CirclePink = () => {
  return (
    <MotionBox
      initial="hidden"
      animate="visible"
      variants={animation}
      bg="pink.700"
      w={{ md: 96, base: 60 }}
      h={{ md: 96, base: 60 }}
      bottom="0"
      right="0"
      position="absolute"
      borderRadius="100% 0% 100% 0% / 100% 100% 0% 0% "
    />
  )
}
