import React from 'react'
import moment from 'moment'
import { Article, ImgWrapper, Img } from './styles'
import { useNearScreen } from '../../../hooks/useNearScreen'

export const MovieDetail = ({
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
          <div>
            <ImgWrapper style={{ display: 'inline-block' }}>
              <Img src={logoBrand} alt="" />
            </ImgWrapper>
            <div style={{ display: 'inline-block' }}>
              <h2>{name}</h2>
              <h4>{`Address: ${address}`}</h4>
            </div>
          </div>
          {schedules.map(({ startTimeZone }) => (
            <>
              <h5>{`${moment(startTimeZone).format('hh:mm')} hrs`}</h5>
            </>
          ))}
        </>
      )}
    </Article>
  )
}
