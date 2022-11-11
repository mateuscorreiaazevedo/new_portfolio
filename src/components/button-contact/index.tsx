// Components
import { animateOpenButton, MotionButton } from './animation'
import { Button, Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react'

// React
import React from 'react'

type Props = {
  absolute?: boolean
}

export const ContactMe = ({ absolute = false }: Props) => {
  if (absolute) {
    return (
      <Popover>
        <PopoverTrigger>
          <MotionButton
            initial="hidden"
            animate="visible"
            variants={animateOpenButton}
            position="absolute"
            top={10}
            right={42}
            color="gray.800"
            bg="white"
            h={10}
            shadow="md"
            _hover={{ bg: 'cyan.50', shadow: 'lg' }}
          >
            Contact me
          </MotionButton>
        </PopoverTrigger>
        <PopoverContent bg="whiteAlpha.700" right="24" color="gray.800" border="none" borderRadius="sm">
          <PopoverBody></PopoverBody>
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button color="gray.800" bg="white" shadow="md" _hover={{ bg: 'cyan.50', shadow: 'lg' }}>
          Contact me
        </Button>
      </PopoverTrigger>
      <PopoverContent bg="whiteAlpha.700" right="24" color="gray.800" border="none" borderRadius="sm">
        <PopoverBody></PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
