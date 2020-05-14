import React from 'react'
import { Button, Toolbar } from 'react95'
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
  Ul
} from './styles'
import { messageService } from '../../../services'

const renderProp = ({ name, setMovieSelected }) => ({
  loading,
  error,
  data: { infoSchedulesByMovie = [] } = {}
}) => {
  messageService.sendMessage(name)
  const { height } = useWindowDimensions()
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
              messageService.sendMessage(undefined)
            }}
          >
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
        <WindowContentUI>
          {loading && <HourglassUI size={32} />}
          {error && <p>Error!!!</p>}
          {!loading && !error && (
            <Ul style={{ height: height - 240 }}>
              {infoSchedulesByMovie.map(({ computedUnique, ...item }) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <MovieDetail key={computedUnique} {...item} />
              ))}
            </Ul>
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
