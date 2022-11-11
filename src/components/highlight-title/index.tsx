import { Highlight, HighlightProps } from '@chakra-ui/react'
import React from 'react'

type Props = {
  query: string
  text: string
  color?: string
}

export const HighTitle: React.FC<Props> = ({ query, color = 'pink.700', text }) => {
  return (
    <Highlight query={query} styles={{ fontWeight: 'bold', color: color, width: '306px' }}>
      {text}
    </Highlight>
  )
}
