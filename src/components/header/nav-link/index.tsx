import { Box, Link } from '@chakra-ui/react'
import React from 'react'

type Props = {
  link: string
  text: string
  onCloseMobile?: any
}

export const NavLink = ({ link, text, onCloseMobile }: Props) => {
  return (
    <Link
      position="relative"
      href={'#' + link}
      color="white"
      css={`
        &:hover {
          text-decoration: none;
          .line {
            width: 100%;
          }
        }
      `}
      onClick={onCloseMobile}
    >
      {text}
      <Box
        className="line"
        transition="width 400ms ease-out"
        h="3px"
        borderRadius="sm"
        w="0"
        position="absolute"
        bg="white"
      />
    </Link>
  )
}
