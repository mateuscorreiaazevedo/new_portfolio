import { Box, Center, Heading } from '@chakra-ui/react'
import { HighTitle } from '../../highlight-title'
import React from 'react'
import Image from 'next/image'
import { animateImage, animateText, MotionContainer, MotionImage, MotionText } from './animation'

export const AboutMeLayout = () => {
  return (
    <Center id="about" as="section" h="100vh" pt={{ md: '100px', base: '72px' }} maxW="1340px" mx="auto">
      <MotionContainer
        transformOrigin="90%"
        spacing={10}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        <MotionText variants={animateText} textAlign={{ md: 'start', base: 'center' }}>
          <Heading fontSize="2xl" fontWeight="normal">
            <HighTitle query="A" text="About me" />
          </Heading>
          <Box w={{ md: 96, base: '4xl' }} textAlign={{ md: 'justify', base: 'center' }} fontSize="md">
            Sempre apaixonado por novos conhecimentos e pela ideia de criar algo a partir das próprias mãos, percorri
            por diversas experiências e finalmente me encontrei no mundo da tecnologia e principalmente na área de
            desenvolvimento web. O prazer de conseguir resolver problemas e fazer algo funcional para as pessoas é algo
            que me está fazendo seguir o ramo da tecnologia.
          </Box>
        </MotionText>
        <MotionImage variants={animateImage} w={96} h={96} display={{ md: 'flex', base: 'none' }}>
          <Image src="/images/avatar2.png" alt="Avatar 2" width={1000} height={1000} style={{ borderRadius: '40%' }} />
        </MotionImage>
      </MotionContainer>
    </Center>
  )
}
