import React, { useState } from 'react'
import { Tabs, Tab, TabBody } from 'react95'
import { MovieDetail } from '../../UI/MovieDetail'
import { QuerySchedulesBy } from '../../../queries/QuerySchedulesBy'
import { useWindowDimensions } from '../../../hooks/useWindowDimensions'
import {
  Container,
  WindowUI,
  WindowHeaderUI,
  WindowContentUI,
  HourglassUI,
  ButtonUI,
  SpanUI,
  Ul,
  IMG
} from './styles'

const renderProp = ({ name, setMovieSelected }) => ({
  loading,
  error,
  data: { infoSchedulesByMovie = [] } = {}
}) => {
  const { height } = useWindowDimensions()
  const [activeTab, setActiveTab] = useState(0)

  // TODO Should group by brands dynamically
  const cinepolisItems = infoSchedulesByMovie.filter(
    ({ brand: { name: nameBrand } }) => nameBrand !== 'Cinemex'
  )
  const cinepolisIcon =
    cinepolisItems.length > 0 ? cinepolisItems[0].brand.logo : null

  const cinemexItems = infoSchedulesByMovie.filter(
    ({ brand: { name: nameBrand } }) => nameBrand === 'Cinemex'
  )
  const cinemexIcon =
    cinemexItems.length > 0 ? cinemexItems[0].brand.logo : null

  return (
    <Container>
      <WindowUI>
        <WindowHeaderUI>
          <span>{`${name}.exe`}</span>
          <ButtonUI
            size="sm"
            square
            onClick={() => {
              setMovieSelected(undefined)
            }}
          >
            <SpanUI>x</SpanUI>
          </ButtonUI>
        </WindowHeaderUI>
        <WindowContentUI>
          {loading && <HourglassUI size={32} />}
          {error && <p>Error!!!</p>}
          {!loading && !error && (
            <>
              <Tabs value={activeTab} onChange={value => setActiveTab(value)}>
                <Tab value={0}>
                  <div>
                    <IMG src={cinepolisIcon} alt="Cinepolis Icon" />
                    Cinepolis
                  </div>
                </Tab>
                <Tab value={1}>
                  <div>
                    <IMG src={cinemexIcon} alt="Cinemex Icon" />
                    Cinemex
                  </div>
                </Tab>
              </Tabs>
              <>
                {activeTab === 0 && (
                  <TabBody>
                    <Ul style={{ height: height - 260 }}>
                      {cinepolisItems.map(({ computedUnique, ...item }) => (
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        <MovieDetail key={computedUnique} {...item} />
                      ))}
                    </Ul>
                  </TabBody>
                )}
                {activeTab === 1 && (
                  <TabBody>
                    <Ul style={{ height: height - 260 }}>
                      {cinemexItems.map(({ computedUnique, ...item }) => (
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        <MovieDetail key={computedUnique} {...item} />
                      ))}
                    </Ul>
                  </TabBody>
                )}
              </>
            </>
          )}
        </WindowContentUI>
      </WindowUI>
    </Container>
  )
}

export const ListOfMoviesDetail = ({
  movie: { name },
  date,
  timeOfDay,
  latitude,
  longitude,
  setMovieSelected
}) => {
  return (
    <QuerySchedulesBy
      movieName={name}
      date={date}
      timeOfDay={timeOfDay}
      latitude={latitude}
      longitude={longitude}
    >
      {renderProp({ name, setMovieSelected })}
    </QuerySchedulesBy>
  )
}
