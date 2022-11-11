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
      delay: 0.4
    }
  }
}
export const CircleOrange = () => {
  return (
    <MotionCircle
      initial="hidden"
      animate="visible"
      variants={animation}
      bg="orange.700"
      size="96"
      top="-40"
      left="-50"
      shadow="dark-lg"
      position="absolute"
    />
  )
}
