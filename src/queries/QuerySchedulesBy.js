import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { ListOfLocationsDetail } from '../components/Lists/ListOfLocationsDetail'

const GET_SCHEDULES_BY_MOVIE = gql`
  query(
    $movieName: String!
    $date: Date!
    $timeOfDay: DateRange!
    $latitude: Float!
    $longitude: Float!
  ) {
    infoSchedulesByMovie(
      movieName: $movieName
      date: $date
      timeOfDay: $timeOfDay
      timeZone: "America/Mexico_City"
      latitude: $latitude
      longitude: $longitude
    ) {
      name
      dist_calculated
      computedUnique
      address
      brand {
        name
        logo
      }
      schedules {
        duration
        typeRoom
        startTimeZone
        movie {
          name
        }
      }
    }
  }
`
const renderProp = ({
  loading,
  error,
  data: { infoSchedulesByMovie = [] } = {}
}) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!!!</p>

  return <ListOfLocationsDetail schedules={infoSchedulesByMovie} />
}

export const QuerySchedulesBy = ({
  movieName,
  date,
  timeOfDay,
  latitude,
  longitude
}) => (
  <Query
    query={GET_SCHEDULES_BY_MOVIE}
    variables={{ movieName, date, timeOfDay, latitude, longitude }}
  >
    {renderProp}
  </Query>
)
