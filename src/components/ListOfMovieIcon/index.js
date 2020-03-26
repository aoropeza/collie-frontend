import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import { useShowOnScroll } from '../../hooks/useShowOnScroll'
import { MovieIcon } from '../MovieIcon/index'
import { List, Item } from './styles'

const withActiveMovies = graphql(
  gql`
    query {
      activeMovies(
        date: "2020-03-24"
        timeOfDay: "12:00-17:59"
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
