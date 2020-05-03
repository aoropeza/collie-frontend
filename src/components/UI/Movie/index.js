import React, { useState } from 'react'
import { Container, Span, Image } from './styles'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg'

export const Movie = ({ cover = DEFAULT_IMAGE, path, name = '?' }) => {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <Container onClick={() => setIsSelected(!isSelected)}>
      <Image src={cover} alt="Associated cover to the movie" />
      <Span href={path} current={isSelected}>
        {name}
      </Span>
    </Container>
  )
}
