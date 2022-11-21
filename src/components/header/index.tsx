import { Button, Center, CenterProps, Flex, HStack, Spacer, theme, useDisclosure } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { transparentize } from 'polished'
import React from 'react'
import { ContactMe } from '../button-contact'
import { NavLink } from './nav-link'
import { CgMenu } from 'react-icons/cg'
import { DrawerMobile } from './drawer'
import { ContactMeMobile } from '../button-contact/btn-mobile'

export const Header = () => {
  const blueAlpha = transparentize(0.5, theme.colors.blue[300])
  const MotionCenter = motion<CenterProps>(Center)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [650, 850], [0, 1])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ref = React.useRef()
  return (
    <>
      <MotionCenter
        display={{ md: 'flex', base: 'none' }}
        w="full"
        position="fixed"
        top={0}
        style={{ opacity: opacity as unknown as number }}
      >
        <Flex
          as="header"
          w="full"
          maxW="1340px"
          h="xl"
          bg={blueAlpha}
          border="1px solid"
          borderColor="blue.700"
          borderRadius="md"
          px={10}
          mx={12}
          mt={2}
        >
          <HStack fontSize="md" spacing={4}>
            <NavLink link="home" text="Home" />
            <NavLink link="about" text="About me" />
            <NavLink link="skills" text="Skills" />
            <NavLink link="projects" text="Projects" />
          </HStack>
          <Spacer />
          <Center>
            <ContactMe />
          </Center>
        </Flex>
      </MotionCenter>
      <MotionCenter
        style={{ opacity: opacity as unknown as number }}
        position="fixed"
        top={0}
        w="full"
        display={{ md: 'none', base: 'flex' }}
      >
        <Flex
          as="header"
          w="full"
          mx={8}
          mt={2}
          bg={blueAlpha}
          h={16}
          px={1}
          borderRadius="sm"
          border="1px solid"
          borderColor="blue.700"
        >
          <Center>
            <Button ref={ref} onClick={onOpen} bg="white" color="gray.800" fontSize="md" borderRadius="sm">
              <CgMenu />
            </Button>
            <DrawerMobile isOpen={isOpen} focusRef={ref} onClose={onClose} />
          </Center>
          <Spacer />
          <Center>
            <ContactMe />
            <ContactMeMobile />
          </Center>
        </Flex>
      </MotionCenter>
    </>
  )
}
