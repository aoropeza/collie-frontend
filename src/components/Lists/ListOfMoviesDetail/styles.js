import styled from 'styled-components'
import { Window, WindowHeader, Button, WindowContent, Hourglass } from 'react95'

export const Container = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 90px;
  max-height: 700px;
`

export const WindowUI = styled(Window)`
  width: 80%;
  margin: auto;
  display: block;
`

export const ButtonUI = styled(Button)`
  margin-right: -6px;
  margin-top: 1px;
`

export const SpanUI = styled.span`
  font-weight: bold;
  transform: 'translateY(-1px)';
`

export const WindowContentUI = styled(WindowContent)`
  min-height: 400px;
`

export const WindowHeaderUI = styled(WindowHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Ul = styled.ul`
  overflow: hidden;
  overflow-y: scroll;
`

export const HourglassUI = styled(Hourglass)`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`
