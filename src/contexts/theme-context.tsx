import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/color-mode'
import React from 'react'
import { myTheme } from '../styles/theme'

const Context = React.createContext({})

export const ThemeProvider = ({ children }) => {
  return (
    <Context.Provider value={{}}>
      <ChakraProvider theme={myTheme}>
        <ColorModeScript initialColorMode="dark" />
        <CSSReset />
        {children}
      </ChakraProvider>
    </Context.Provider>
  )
}
