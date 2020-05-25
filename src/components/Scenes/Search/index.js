import React from 'react'
import { ListOfMovies } from '../../Lists/ListOfMovies/index'
import { ListOfMoviesDetail } from '../../Lists/ListOfMoviesDetail'

export const SceneSearch = ({
  dateSelected,
  timeSelected,
  latitudeSelected,
  longitudeSelected
}) => {
  return (
    <ListOfMovies date={dateSelected} timeOfDay={timeSelected}>
      {({ movieSelected, setMovieSelected }) => {
        return (
          movieSelected && (
            <ListOfMoviesDetail
              movie={movieSelected}
              date={dateSelected}
              timeOfDay={timeSelected}
              latitude={latitudeSelected}
              longitude={longitudeSelected}
              setMovieSelected={setMovieSelected}
            />
          )
        )
      }}
    </ListOfMovies>
  )
}
