import React from 'react'
import { Container, Span, Image } from './styles'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg'

export const Movie = ({ cover = DEFAULT_IMAGE, name = '?', isSelected }) => {
  return (
    <Container>
      <Image src={cover} alt="Associated cover to the movie" />
      <Span current={isSelected}>{name}</Span>
    </Container>
  )
}
