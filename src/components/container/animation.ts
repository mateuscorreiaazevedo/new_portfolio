import { Center, CenterProps } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'

export const animateContainer: Variants = {
  hidden: {
    y: 500,
    scale: 0.1,
    opacity: 0
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1
  }
}

export const MotionCenter = motion<CenterProps>(Center)
