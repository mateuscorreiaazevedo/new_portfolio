// Components
import { Center, Spacer, Text, Tooltip } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

// Types
import { SkillProps } from '../../types/skills'
import { animate, MotionCard } from './animation'

export const SkillCard = (props: SkillProps) => {
  const { image, level, name } = props
  const borderRadius = name === 'Chakra UI' ? '50%' : ''

  return (
    <Tooltip closeDelay={400} label={`${level}%`} hasArrow bg="blue.300" color="white">
      <MotionCard
        maxW={40}
        maxH={32}
        variants={animate}
        transitionDuration="300ms"
        flexDirection="column"
        border="1px solid"
        borderColor="blue.700"
        p={2}
        borderRadius="md"
        _hover={{
          bg: 'blue.300'
        }}
        transformOrigin="0%"
      >
        <Spacer />
        <Center>
          <Image src={image} alt={name} width={80} height={80} style={{ borderRadius }} />
        </Center>
        <Spacer />
        <Text>{name}</Text>
      </MotionCard>
    </Tooltip>
  )
}
