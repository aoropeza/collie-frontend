import styled, { css } from 'styled-components'
import { Img } from 'react-image'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 120px;
  margin: auto;
`

export const Span = styled.span`
  color: #ffffff;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  min-height: 33px;
  ${({ current }) =>
    current &&
    css`
      background: #0000aa;
    `}
`

export const Image = styled(Img)`
  object-fit: cover;
  height: 80px;
  width: 80px;
  margin: auto auto 10px auto;
`
