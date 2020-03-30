import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import { useShowOnScroll } from '../../hooks/useShowOnScroll'
import { MovieIcon } from '../MovieIcon/index'
import { List, Item } from './styles'

const withActiveMovies = graphql(
  gql`
    query($date: Date!, $timeOfDay: DateRange!) {
      activeMovies(
        date: $date
        timeOfDay: $timeOfDay
        timeZone: "America/Mexico_City"
      ) {
        name
        id
        cover
      }
    }
  `
)

const ListOfMovieIconComponent = ({
  loading,
  data: { activeMovies = [] }
} = {}) => {
  const [showFixed] = useShowOnScroll(200)

  // TODO Make a better loading component
  const renderList = fixed => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="loading">
          <MovieIcon />
        </Item>
      ) : (
        activeMovies.map(movie => {
          const { cover, name } = movie
          return (
            <Item key={movie.id}>
              <MovieIcon cover={cover} name={name} />
            </Item>
          )
        })
      )}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
export const ListOfMovieIcon = withActiveMovies(ListOfMovieIconComponent)
