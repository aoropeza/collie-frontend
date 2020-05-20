import React from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableHeadCell,
  TableBody,
  TableDataCell,
  Fieldset
} from 'react95'
import moment from 'moment'
import { FieldsetUI } from './styles'
import { useNearScreen } from '../../../hooks/useNearScreen'

export const MovieDetail = ({
  name,
  address,
  brand: { logo: logoBrand },
  schedules
}) => {
  const [show, ref] = useNearScreen()

  return (
    <div ref={ref}>
      {show && (
        <FieldsetUI label={name}>
          <div>
            <div style={{ display: 'inline-block' }}>
              <h4>{`Address: ${address}`}</h4>
              <h4>Distancia: 11km</h4>
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
              {schedules.map(({ startTimeZone }) => (
                <>
                  <TableRow>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      {`${moment(startTimeZone).format('hh:mm')} hrs`}
                    </TableDataCell>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      Normal
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
