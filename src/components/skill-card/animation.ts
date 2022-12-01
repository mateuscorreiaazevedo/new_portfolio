import { Center, CenterProps } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'

export const animate: Variants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: { y: 0, opacity: 1 }
}

export const MotionCard = motion<CenterProps>(Center)
