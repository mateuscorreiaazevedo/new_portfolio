import { motion, Variants } from 'framer-motion'
import { Center, CenterProps, Flex, FlexProps } from '@chakra-ui/react'

export const animateFlex: Variants = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      delayChildren: 0.5,
      staggerChildren: 0.6
    }
  }
}

export const animateChild: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

export const animateChild2: Variants = {
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}
export const animateChild3: Variants = {
  hidden: { x: 200, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

export const MotionFlex = motion<FlexProps>(Flex)
export const MotionCenter = motion<CenterProps>(Center)
