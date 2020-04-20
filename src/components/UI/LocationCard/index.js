import React from 'react'
import { MdPageview } from 'react-icons/md'
import { Article, ImgWrapper, Img, ContentText } from './styles'
import { useNearScreen } from '../../../hooks/useNearScreen'

export const LocationCard = ({
  name,
  address,
  brand: { logo: logoBrand },
  schedules
}) => {
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {show && (
        <>
          <ImgWrapper>
            <Img src={logoBrand} alt="" />
          </ImgWrapper>
          <h2>{name}</h2>
          <h1>{schedules[0].movie.name}</h1>
          <h4>{`Address: ${address}`}</h4>
          {schedules.map(({ startTimeZone }) => (
            <>
              <h5>{startTimeZone}</h5>
            </>
          ))}
        </>
      )}
    </Article>
  )
}
