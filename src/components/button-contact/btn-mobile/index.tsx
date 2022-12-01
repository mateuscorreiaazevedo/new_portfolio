// Components
import { Button, Popover, PopoverBody, PopoverContent, PopoverTrigger, VStack } from '@chakra-ui/react'
import { animateOpenButton, MotionButton } from '../animation'

// Icons
import { BsGithub, BsInstagram, BsLinkedin, BsTelegram, BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMessage } from 'react-icons/ai'
// React
import React from 'react'
import { ContactLinks } from '../links'

type Props = {
  absolute?: boolean
}

export const ContactMeMobile = ({ absolute = false }: Props) => {
  if (absolute) {
    return (
      <Popover>
        <PopoverTrigger>
          <MotionButton
            display={{ md: 'none', base: 'block' }}
            initial="hidden"
            animate="visible"
            variants={animateOpenButton}
            position="absolute"
            top={10}
            right={42}
            color="gray.800"
            fontSize="md"
            bg="white"
            borderRadius="sm"
            shadow="md"
            _hover={{ bg: 'cyan.50', shadow: 'lg' }}
          >
            <AiOutlineMessage />
          </MotionButton>
        </PopoverTrigger>
        <PopoverContent bg="white" right={{ md: 24, base: 5 }} color="gray.800" border="none" borderRadius="sm">
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
        <Button
          display={{ md: 'none', base: 'block' }}
          color="gray.800"
          bg="white"
          fontSize="md"
          borderRadius="sm"
          shadow="md"
          _hover={{ bg: 'cyan.50', shadow: 'lg' }}
        >
          <AiOutlineMessage />
        </Button>
      </PopoverTrigger>
      <PopoverContent bg="white" right={{ md: 24, base: 5 }} color="gray.800" border="none" borderRadius="sm">
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
