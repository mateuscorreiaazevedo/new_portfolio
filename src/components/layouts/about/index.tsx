import { Center, Heading } from '@chakra-ui/react'
import React from 'react'
import { HighTitle } from '../../highlight-title'

export const AboutMeLayout = () => {
  return (
    <Center id="about" as="section" h="100vh">
      <Heading>
        <HighTitle query="A" text="About me" />
      </Heading>
    </Center>
  )
}
