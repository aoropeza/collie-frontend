import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { QueryActiveMovies } from '../../../queries/QueryActiveMovies'
import { Movie } from '../../UI/Movie'
import { Container, HourglassUI } from './styles'

const renderProp = ({ children, movieSelected, setMovieSelected }) => ({
  loading,
  error,
  data: { activeMovies = [] } = {}
}) => (
  // TODO Make a better loading component
  <>
    <Container>
      {loading && <HourglassUI size={42} />}
      {error && <p>Error!!!</p>}
      {!loading && !error && (
        <>
          <Grid container alignItems="center">
            {activeMovies.map(movie => (
              <Grid
                style={{ paddingTop: 30 }}
                item
                xs={6}
                sm={4}
                md={3}
                lg={2}
                xl={2}
                key={movie.id}
                onClick={() => setMovieSelected(movie)}
              >
                <Movie
                  cover={movie.cover}
                  name={movie.name}
                  id={movie.id}
                  isSelected={movieSelected && movieSelected.id === movie.id}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
    {children({ movieSelected, setMovieSelected })}
  </>
)

export const ListOfMovies = ({ children, date, timeOfDay }) => {
  const [movieSelected, setMovieSelected] = useState(undefined)
  return (
    <>
      <QueryActiveMovies date={date} timeOfDay={timeOfDay}>
        {renderProp({ children, movieSelected, setMovieSelected })}
      </QueryActiveMovies>
    </>
  )
}
