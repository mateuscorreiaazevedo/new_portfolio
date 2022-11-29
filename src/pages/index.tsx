// Components
import { AboutMeLayout } from '../components/layouts/about'
import { HomeLayout } from '../components/layouts/home'
import { Header } from '../components/header'
import { Box } from '@chakra-ui/react'

// Next & React imports
import Head from 'next/head'
import React from 'react'
import useScrollSnap from 'react-use-scroll-snap'
import { GetStaticProps } from 'next'
import { SkillsLayout } from '../components/layouts/skills'

import axios from 'axios'

function Main() {
  const ref = React.useRef(null)
  useScrollSnap({ ref, duration: 5, delay: 0 })

  return (
    <>
      <Head>
        <title>Mateus Dev | Portfólio</title>
      </Head>
      <Box w="full" ref={ref}>
        <HomeLayout />
        <Header />
        <AboutMeLayout />
        <SkillsLayout />
      </Box>
    </>
  )
}

export default Main

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
