import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { ListOfMovieIcon } from '../components/ListOfMovieIcon'

const query = gql`
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

export const ListOfMovieIconsWithQuery = ({ date, timeOfDay }) => (
  <Query query={query} variables={{ date, timeOfDay }}>
    {({ loading, data: { activeMovies = [] } = {} }) => (
      <ListOfMovieIcon loading={loading} activeMovies={activeMovies} />
    )}
  </Query>
)
