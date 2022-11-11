import { Circle, SquareProps } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import React from 'react'

const MotionCircle = motion<SquareProps>(Circle)

const animation: Variants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      delay: 0.6
    }
  }
}

export const CircleBlue = () => {
  return (
    <MotionCircle
      initial="hidden"
      animate="visible"
      variants={animation}
      bg="blue.700"
      size="3xl"
      left="80"
      top="96"
      position="absolute"
    />
  )
}
