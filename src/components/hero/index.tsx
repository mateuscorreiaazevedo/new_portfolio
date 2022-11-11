import { animateChild, animateChild2, animateChild3, animateFlex, MotionCenter, MotionFlex } from './animation'
import { Box, Heading, Text } from '@chakra-ui/react'
import { HighTitle } from '../highlight-title'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <MotionFlex
      color="gray.800"
      mx={16}
      mb={10}
      w="full"
      initial="hidden"
      animate="visible"
      align="center"
      justifyContent="space-around"
      variants={animateFlex}
      flexDirection={{ md: 'row', base: 'column' }}
    >
      <MotionCenter variants={animateChild2}>
        <Heading
          w="4xl"
          fontSize={{ md: '2xl', base: '5xl' }}
          textAlign={{ md: 'start', base: 'center' }}
          fontWeight="normal"
          transition="all 400ms ease-in"
          cursor="pointer"
          _hover={{
            transform: 'translateX(40px) translateY(-20px)'
          }}
        >
          Hi! I'm{' '}
          <Text color="blue.700" fontWeight="bold">
            Mateus Azevedo!
          </Text>
        </Heading>
      </MotionCenter>

      <MotionCenter
        variants={animateChild}
        bg="whiteAlpha.300"
        borderRadius="lg"
        h={{ md: '400px', base: '3xl' }}
        w={{ md: '400px', base: '3xl' }}
        shadow="lg"
      >
        <Image src="/images/avatar2.png" alt="avatar 2" width={400} height={400} style={{ borderRadius: '30%' }} />
      </MotionCenter>

      <MotionCenter display={{ md: 'flex', base: 'none' }} variants={animateChild3}>
        <Heading
          textAlign="center"
          w="80"
          fontSize="2xl"
          fontWeight="normal"
          transition="all 400ms ease-in"
          cursor="pointer"
          _hover={{
            transform: 'translateX(-40px) translateY(20px)'
          }}
        >
          <HighTitle text="Frontend" query="Front" color="blue.700" />
          <Box>
            <HighTitle text="Developer" query="Dev" color="blue.700" />
          </Box>
        </Heading>
      </MotionCenter>
    </MotionFlex>
  )
}
