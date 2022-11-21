import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { HighTitle } from '../../highlight-title'

export const AboutMeLayout = () => {
  return (
    <Box id="about" as="section" h="100vh" pt={{ md: '100px', base: '72px' }} maxW="1340px" mx="auto">
      <Heading>
        <HighTitle query="A" text="About me" />
      </Heading>
    </Box>
  )
}
