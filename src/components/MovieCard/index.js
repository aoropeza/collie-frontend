import React from 'react'
import { MdPageview } from 'react-icons/md'
import { ImgWrapper, Img, ContentText } from './styles'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg'

export const MovieCard = ({ id, cover = DEFAULT_IMAGE, name = 'NA' }) => {
  return (
    <article href={`/detail/${id}`}>
      <ImgWrapper>
        <Img src={cover} alt="" />
      </ImgWrapper>
      <ContentText>
        <MdPageview size="32px" />
        {name}
      </ContentText>
    </article>
  )
}
