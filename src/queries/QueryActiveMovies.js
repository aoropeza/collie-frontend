import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

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

export const QueryActiveMovies = ({ date, timeOfDay, children }) => (
  <Query query={GET_ACTIVE_MOVIE} variables={{ date, timeOfDay }}>
    {children}
  </Query>
)
