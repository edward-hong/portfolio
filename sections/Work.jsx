import styled from 'styled-components'

import Hex from '../components/Hex'
import { PRIMARY_COLOR } from '../constants'

const Wrapper = styled.section`
  clear: 'both';
`

const Close = styled(Hex)`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 2;
  cursor: default; // pointer

  &::before,
  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 50%;
    background-color: white;
    opacity: 0; // 1
    position: absolute;
    transition: all 0.25s ease-in-out 0s;
  }

  &::before {
    z-index: 2;
    left: 23%;
    top: 48%;
    transform: rotate(45deg);
  }

  &::after {
    right: 27%;
    top: 48%;
    transform: rotate(-45deg);
  }
`

const Work = () => {
  return (
    <Wrapper>
      <Close
        href="#"
        size={11}
        bgColor={'transparent'} // PRIMARY_COLOR
        top="0px"
        left="50%"
      ></Close>
    </Wrapper>
  )
}

export default Work
