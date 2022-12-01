import { Box, BoxProps, Flex, FlexProps, Grid, GridProps, Heading, HeadingProps } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'

export const animationContainer: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 1,
      delayChildren: 0.4,
      staggerChildren: 0.4
    }
  }
}

export const animationHeading: Variants = {
  hidden: {
    opacity: 0,
    x: -300
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8,
      duration: 1.2
    }
  }
}

export const MotionHeading = motion<HeadingProps>(Heading)
export const MotionGrid = motion<FlexProps>(Flex)
export const MotionBox = motion<BoxProps>(Box)
