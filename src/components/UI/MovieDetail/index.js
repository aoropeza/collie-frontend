import React from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableHeadCell,
  TableBody,
  TableDataCell
} from 'react95'
import moment from 'moment'
import { FieldsetUI } from './styles'
import { useNearScreen } from '../../../hooks/useNearScreen'

export const MovieDetail = ({
  name,
  address,
  dist_calculated: distCalculated,
  schedules
}) => {
  const [show, ref] = useNearScreen()
  const km = distCalculated / 1000

  return (
    <div ref={ref}>
      {show && (
        <FieldsetUI label={name}>
          <div>
            <div style={{ display: 'inline-block' }}>
              <h4>{`Address: ${address}`}</h4>
              <h4>{`Distancia: ${km.toFixed(1)} km`}</h4>
            </div>
          </div>
          <Table>
            <TableHead>
              <TableRow head>
                <TableHeadCell>Horario</TableHeadCell>
                <TableHeadCell>Sala</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedules.map(({ startTimeZone, typeRoom }) => (
                <>
                  <TableRow>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      {`${moment(startTimeZone).format('hh:mm')} hrs`}
                    </TableDataCell>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      {typeRoom}
                    </TableDataCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </FieldsetUI>
      )}
    </div>
  )
}
