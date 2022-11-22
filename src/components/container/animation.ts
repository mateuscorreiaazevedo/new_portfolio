import { Center, CenterProps } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'

export const animateContainer: Variants = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1
  }
}

export const MotionCenter = motion<CenterProps>(Center)
