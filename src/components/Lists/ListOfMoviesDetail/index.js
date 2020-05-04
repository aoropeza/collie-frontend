import React from 'react'
import { Button, Toolbar, WindowContent } from 'react95'
import { MovieDetail } from '../../UI/MovieDetail'
import { QuerySchedulesBy } from '../../../queries/QuerySchedulesBy'
import { useWindowDimensions } from '../../../hooks/useWindowDimensions'
import {
  Container,
  WindowUI,
  WindowHeaderUI,
  ButtonUI,
  SpanUI,
  Ul
} from './styles'

const renderProp = ({
  loading,
  error,
  data: { infoSchedulesByMovie = [] } = {}
}) => {
  const { height } = useWindowDimensions()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!!!</p>
  return (
    <Container>
      <WindowUI style={{}}>
        <WindowHeaderUI>
          <span>react95.exe</span>
          <ButtonUI size="sm" square onClick={() => console.log('jajkadjkda')}>
            <SpanUI>x</SpanUI>
          </ButtonUI>
        </WindowHeaderUI>
        <Toolbar>
          <Button variant="menu" size="sm">
            File
          </Button>
          <Button variant="menu" size="sm">
            Edit
          </Button>
          <Button variant="menu" size="sm" disabled>
            Save
          </Button>
        </Toolbar>
        <WindowContent>
          <Ul style={{ height: height - 300 }}>
            {infoSchedulesByMovie.map(({ computedUnique, ...item }) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <MovieDetail key={computedUnique} {...item} />
            ))}
          </Ul>
        </WindowContent>
      </WindowUI>
    </Container>
  )
}

export const ListOfMoviesDetail = ({
  movieName,
  date,
  timeOfDay,
  latitude,
  longitude
}) => {
  return (
    <QuerySchedulesBy
      movieName={movieName}
      date={date}
      timeOfDay={timeOfDay}
      latitude={latitude}
      longitude={longitude}
    >
      {renderProp}
    </QuerySchedulesBy>
  )
}
