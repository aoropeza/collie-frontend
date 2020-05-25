import styled from 'styled-components'
import { Hourglass } from 'react95'

export const Container = styled.div`
  width: 100%;
  padding-top: 50px;
`

export const HourglassUI = styled(Hourglass)`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`
