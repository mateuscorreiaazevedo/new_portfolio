// Components
import { Button, Popover, PopoverBody, PopoverContent, PopoverTrigger, VStack } from '@chakra-ui/react'
import { animateOpenButton, MotionButton } from './animation'

// Icons
import { BsGithub, BsInstagram, BsLinkedin, BsTelegram, BsWhatsapp } from 'react-icons/bs'

// React
import React from 'react'
import { ContactLinks } from './links'

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
        <PopoverContent
          bg="whiteAlpha.700"
          backdropFilter="auto"
          backdropBlur="lg"
          right={{ md: 24, base: 5 }}
          color="gray.800"
          border="none"
          borderRadius="sm"
        >
          <PopoverBody>
            <VStack>
              <ContactLinks href="https://github.com/mateuscorreiaazevedo">
                <BsGithub /> GitHub
              </ContactLinks>
              <ContactLinks href="https://instagram.com/mateuscorreiaazevedo">
                <BsInstagram /> Instagram
              </ContactLinks>
              <ContactLinks href="https://linkedin.com/in/mateuscorreiaazevedo">
                <BsLinkedin />
                LinkedIn
              </ContactLinks>
              <ContactLinks href="https://t.me/mateus_mca">
                <BsTelegram />
                Telegram
              </ContactLinks>
              <ContactLinks href="https://api.whatsapp.com/send/?phone=5577981237442&text&type=phone_number&app_absent=0">
                <BsWhatsapp /> WhatsApp
              </ContactLinks>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button color="gray.800" bg="white" h={10} shadow="md" _hover={{ bg: 'cyan.50', shadow: 'lg' }}>
          Contact me
        </Button>
      </PopoverTrigger>
      <PopoverContent
        bg="whiteAlpha.700"
        backdropFilter="auto"
        backdropBlur="lg"
        right={{ md: 24, base: 5 }}
        color="gray.800"
        border="none"
        borderRadius="sm"
      >
        <PopoverBody>
          <VStack>
            <ContactLinks href="https://github.com/mateuscorreiaazevedo">
              <BsGithub /> GitHub
            </ContactLinks>
            <ContactLinks href="https://instagram.com/mateuscorreiaazevedo">
              <BsInstagram /> Instagram
            </ContactLinks>
            <ContactLinks href="https://linkedin.com/in/mateuscorreiaazevedo">
              <BsLinkedin />
              LinkedIn
            </ContactLinks>
            <ContactLinks href="https://t.me/mateus_mca">
              <BsTelegram />
              Telegram
            </ContactLinks>
            <ContactLinks href="https://api.whatsapp.com/send/?phone=5577981237442&text&type=phone_number&app_absent=0">
              <BsWhatsapp /> WhatsApp
            </ContactLinks>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
