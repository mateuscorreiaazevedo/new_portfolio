import { animateLink, MotionLink } from './animation'
import { Link as A } from '@chakra-ui/react'
import React from 'react'

type Props = {
  link: 'about' | 'skills' | 'projects'
  text: string
  color: 'white' | 'gray.800'
}

export const NavLink: React.FC<Props> = ({ link, text, color = 'white' }) => {
  return (
    <MotionLink variants={animateLink}>
      <A
        fontSize="md"
        href={'#' + link}
        fontWeight="medium"
        color={color}
        transition="all 400ms ease-out"
        _hover={{
          textDecoration: 'none',
          mx: '4',
          fontSize: 'lg'
        }}
      >
        {text}
      </A>
    </MotionLink>
  )
}
