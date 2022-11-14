import { Button, ButtonProps } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'

export const animateOpenButton: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
    rotate: -360
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    rotate: 0,
    transition: {
      delay: 1.8
    }
  }
}

export const MotionButton = motion<ButtonProps>(Button)
