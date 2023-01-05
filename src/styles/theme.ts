import { Theme, theme } from '@chakra-ui/react'

export const myTheme: Theme = {
  ...theme,
  styles: {
    global: {
      'html, body': {
        bg: '#242424',
        color: '#ffff',
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
          w: '8px',
          bg: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          bg: 'orange.700',
          borderRadius: 'md',
        },
      },
    },
  },
  fonts: {
    body: 'Montserrat, system-ui, sans-serif',
    heading: 'Montserrat, system-ui, sans-serif',
    mono: 'sans-serif',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 300,
    medium: 500,
    bold: 700,
  },
  fontSizes: {
    ...theme.fontSizes,
    '2xl': '64px',
    xl: '32px',
    lg: '24px',
    md: '20px',
  },
  sizes: {
    ...theme.sizes,
    96: '470px',
    '4xl': '300px',
    '3xl': '200px',
    '2xl': '100px',
    xl: '82px',
    16: '60px',
    md: '32px',
    sm: '26px',
  },
  colors: {
    ...theme.colors,
    yellow: {
      ...theme.colors.yellow,
      700: '#ffbe0b',
    },
    orange: {
      ...theme.colors.orange,
      700: '#fb5607',
    },
    pink: {
      ...theme.colors.pink,
      700: '#ff006e',
    },
    blue: {
      ...theme.colors.blue,
      300: '#3a86ff',
      700: '#8338ec',
    },
    gray: {
      ...theme.colors.gray,
      50: '#f3f3f3',
      800: '#333333',
      900: '#242424',
    },
  },
  radii: {
    ...theme.radii,
    lg: '50%',
    md: '20px',
    sm: '10px',
  },
}
