import { Box, BoxProps } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'

export const animateLink: Variants = {
  hidden: {
    y: 10,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1
    }
  }
}

export const MotionLink = motion<BoxProps>(Box)
