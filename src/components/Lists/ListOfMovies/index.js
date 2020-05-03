import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { QueryActiveMovies } from '../../../queries/QueryActiveMovies'
import { Movie } from '../../UI/Movie'
import { Container } from './styles'

const renderProp = ({ children, movieSelected, setMovieSelected }) => ({
  loading,
  error,
  data: { activeMovies = [] } = {}
}) => (
  // TODO Make a better loading component
  <>
    <Container>
      {loading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
      {!loading && !error && (
        <>
          <Grid container alignItems="center">
            {activeMovies.map(({ id, cover, name }) => (
              <Grid
                style={{ paddingTop: 30 }}
                item
                xs={6}
                sm={4}
                md={3}
                lg={2}
                xl={2}
                key={id}
                onClick={() => setMovieSelected(name)}
              >
                <Movie cover={cover} name={name} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
    {children({ movieSelected })}
  </>
)

export const ListOfMovies = ({ children }) => {
  const [movieSelected, setMovieSelected] = useState(undefined)
  return (
    <>
      <QueryActiveMovies date="2020-03-24" timeOfDay="12:00-17:59">
        {renderProp({ children, movieSelected, setMovieSelected })}
      </QueryActiveMovies>
    </>
  )
}
