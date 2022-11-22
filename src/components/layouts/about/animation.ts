import { Box, BoxProps, Center, CenterProps, HStack, StackProps } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'

export const animateImage: Variants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1.2
    }
  }
}

export const animateText: Variants = {
  hidden: {
    opacity: 0,
    x: -100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1.2
    }
  }
}

export const MotionImage = motion<CenterProps>(Center)
export const MotionText = motion<BoxProps>(Box)
export const MotionContainer = motion<StackProps>(HStack)
