// Components
import { AboutMeLayout } from '../components/layouts/about'
import { HomeLayout } from '../components/layouts/home'
import { Header } from '../components/header'
import { Box } from '@chakra-ui/react'

// Next & React imports
import Head from 'next/head'
import React from 'react'

function Main() {
  return (
    <>
      <Head>
        <title>Mateus Dev | Portfólio</title>
      </Head>
      <HomeLayout />
      <Box position="relative" w="full">
        <Header />
        <AboutMeLayout />
      </Box>
    </>
  )
}

export default Main
