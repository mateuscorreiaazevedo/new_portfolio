import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, theme, VStack } from '@chakra-ui/react'
import { transparentize } from 'polished'
import React from 'react'
import { NavLink } from '../nav-link'

type Props = {
  isOpen: any
  onClose: any
  focusRef: any
}

export const DrawerMobile = ({ focusRef, isOpen, onClose }: Props) => {
  const blueAlpha = transparentize(0.5, theme.colors.blue[300])
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose} finalFocusRef={focusRef}>
      <DrawerOverlay />
      <DrawerContent bg={blueAlpha} backdropFilter="auto" backdropBlur="sm">
        <DrawerCloseButton />
        <DrawerBody>
          <VStack fontSize="md" spacing={3}>
            <NavLink link="home" text="Home" onCloseMobile={onClose} />
            <NavLink link="about" text="About me" onCloseMobile={onClose} />
            <NavLink link="skills" text="Skills" onCloseMobile={onClose} />
            <NavLink link="projects" text="Projects" onCloseMobile={onClose} />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
