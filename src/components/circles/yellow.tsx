import { Circle, SquareProps } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import React from 'react'

const MotionCircle = motion<SquareProps>(Circle)

const animation: Variants = {
  hidden: {
    x: 100,
    y: -100,
    scale: 0
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.5
    }
  }
}

export const CircleYellow = () => {
  return (
    <MotionCircle
      initial="hidden"
      animate="visible"
      variants={animation}
      bg="yellow.700"
      size="2xl"
      right="40"
      top="32"
      position="absolute"
    />
  )
}
