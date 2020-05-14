import React from 'react'
import { ListOfMovies } from '../../Lists/ListOfMovies/index'
import { ListOfMoviesDetail } from '../../Lists/ListOfMoviesDetail'

export const SceneSearch = ({ dateSelected, timeSelected }) => {
  return (
    <ListOfMovies>
      {({ movieSelected, setMovieSelected }) => {
        return (
          movieSelected && (
            <ListOfMoviesDetail
              movie={movieSelected}
              // date="2020-03-20"
              date={dateSelected}
              timeOfDay={timeSelected}
              latitude={19.4499759}
              longitude={-99.0704167}
              setMovieSelected={setMovieSelected}
            />
          )
        )
      }}
    </ListOfMovies>
  )
}
