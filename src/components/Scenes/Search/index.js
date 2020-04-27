import React from 'react'
import { Filters } from '../../Sections/Filters'
import { QuerySchedulesBy } from '../../../queries/QuerySchedulesBy'

export const SceneSearch = () => (
  <>
    <Filters>
      {({ movieSelected, dateSelected, timeSelected }) => {
        return (
          <QuerySchedulesBy
            movieName={movieSelected}
            //date="2020-03-20"
            date={dateSelected}
            timeOfDay="09:00-17:59"
            latitude={19.4499759}
            longitude={-99.0704167}
          />
        )
      }}
    </Filters>
  </>
)
