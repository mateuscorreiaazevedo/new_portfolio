import { Link, LinkProps } from '@chakra-ui/react'
import React from 'react'

export const ContactLinks: React.FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <Link
      _hover={{
        textDecoration: 'none',
        color: 'blue.700'
      }}
      {...rest}
      fontSize="md"
      display="flex"
      alignItems="center"
      gap="2"
      transition="all 300ms ease-in"
      fontWeight="medium"
      color="gray.800"
      target="_blank"
    >
      {children}
    </Link>
  )
}
