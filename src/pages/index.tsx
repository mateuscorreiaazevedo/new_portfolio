// Components
import { HomeLayout } from '../components/layouts/home'

// Style - ChakraUI

// Next & React imports
import Head from 'next/head'
import React from 'react'
import { AboutMeLayout } from '../components/layouts/about'

function Main() {
  return (
    <>
      <Head>
        <title>Mateus Dev | Portfólio</title>
      </Head>
      <HomeLayout />
      <AboutMeLayout />
    </>
  )
}

export default Main
