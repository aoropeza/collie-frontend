import React from 'react'

import SEARCH_IMG from '../../../images/search.png'
import { Container, Span, Image } from './styles'

export const Movie = ({ cover, name, isSelected }) => {
  return (
    <Container>
      <Image src={[cover, SEARCH_IMG]} alt="Movie's cover" />
      <Span current={isSelected}>{name}</Span>
    </Container>
  )
}
