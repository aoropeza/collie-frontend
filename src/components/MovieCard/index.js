import React from 'react'
import { MdPageview } from 'react-icons/md'
import { Article, ImgWrapper, Img, ContentText } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg'

export const MovieCard = ({ id, cover = DEFAULT_IMAGE, name = 'NA' }) => {
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {show && (
        <>
          <ImgWrapper>
            <Img src={cover} alt="" />
          </ImgWrapper>
          <ContentText>
            <MdPageview size="32px" />
            {name}
          </ContentText>
        </>
      )}
    </Article>
  )
}
