import { Button, Center, Flex, HStack, Spacer, theme, useDisclosure } from '@chakra-ui/react'
import { transparentize } from 'polished'
import React from 'react'
import { ContactMe } from '../button-contact'
import { NavLink } from './nav-link'
import { CgMenu } from 'react-icons/cg'
import { DrawerMobile } from './drawer'
import { ContactMeMobile } from '../button-contact/btn-mobile'

export const Header = () => {
  const blueAlpha = transparentize(0.5, theme.colors.blue[300])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ref = React.useRef()
  return (
    <>
      <Center display={{ md: 'flex', base: 'none' }} w="full" position="fixed" zIndex="docked" top={0}>
        <Flex
          as="header"
          w="full"
          maxW="1340px"
          h="xl"
          bg={blueAlpha}
          border="1px solid"
          borderColor="blue.700"
          backdropFilter="auto"
          backdropBlur="md"
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
      </Center>
      <Center position="fixed" top={0} w="full" display={{ md: 'none', base: 'flex' }}>
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
          zIndex="dropdown"
          backdropFilter="auto"
          backdropBlur="md"
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
      </Center>
    </>
  )
}
