import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg'

export const MovieIcon = ({ cover = DEFAULT_IMAGE, path, name = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} alt="Associated cover to the movie" />
    {name}
  </Anchor>
)
