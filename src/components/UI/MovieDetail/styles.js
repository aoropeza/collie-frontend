import styled from 'styled-components'
import { fadeIn } from '../../../styles/animation'

export const Article = styled.article`
  min-height: 200px;
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  overflow: hidden;
  position: relative;
  height: 120px;
  width: 120px;
  background: black;
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
`
