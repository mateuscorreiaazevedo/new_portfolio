import { ThemeProvider } from '../contexts/theme-context'
import { AppProps } from 'next/app'
import React from 'react'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
