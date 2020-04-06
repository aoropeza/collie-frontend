import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { ListOfMovies } from '../components/Lists/ListOfMovies'

const GET_ACTIVE_MOVIE = gql`
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

const renderProp = ({ loading, error, data: { activeMovies = [] } = {} }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!!!</p>

  return <ListOfMovies activeMovies={activeMovies} />
}

export const ListOfActiveMovies = ({ date, timeOfDay }) => (
  <Query query={GET_ACTIVE_MOVIE} variables={{ date, timeOfDay }}>
    {renderProp}
  </Query>
)
