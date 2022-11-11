import { HStack, StackProps, VStack } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'

export const animateNav: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.7,
      delayChildren: 2,
      staggerChildren: 0.5
    }
  }
}

export const MotionHStack = motion<StackProps>(HStack)
export const MotionVStack = motion<StackProps>(VStack)
