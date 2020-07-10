import { useState } from 'react'
import styled from 'styled-components'

import Hex from '../components/Hex'

const HamburgerHex = styled(Hex)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
`
const HamburgerIcon = styled.span`
  display: block;
  position: absolute;
  height: 2px;
  width: 26%;
  background-color: white;
  transition: all 0.25s ease-in-out 0s;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: rotate(${({ rotate }) => rotate}deg);
  opacity: ${({ opacity }) => opacity};
`

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleHamburger = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <HamburgerHex
      href="#"
      size={11}
      bgColor="#fe7f2d"
      onClick={toggleHamburger}
    >
      <HamburgerIcon
        top={isOpen ? '40%' : '33%'}
        left={isOpen ? 'calc(25% + 2px)' : '24%'}
        rotate={isOpen ? 45 : 0}
        opacity={1}
      />
      <HamburgerIcon
        top={isOpen ? '40%' : '33%'}
        left={isOpen ? 'calc(50% - 2px)' : '50%'}
        rotate={isOpen ? -45 : 0}
        opacity={1}
      />
      <HamburgerIcon
        top="47%"
        left={isOpen ? '-10%' : '24%'}
        rotate={0}
        opacity={isOpen ? 0 : 1}
      />
      <HamburgerIcon
        top="47%"
        left={isOpen ? '100%' : '50%'}
        rotate={0}
        opacity={isOpen ? 0 : 1}
      />
      <HamburgerIcon
        top={isOpen ? '55%' : '62%'}
        left={isOpen ? 'calc(25% + 2px)' : '24%'}
        rotate={isOpen ? -45 : 0}
        opacity={1}
      />
      <HamburgerIcon
        top={isOpen ? '55%' : '62%'}
        left={isOpen ? 'calc(50% - 2px)' : '50%'}
        rotate={isOpen ? 45 : 0}
        opacity={1}
      />
    </HamburgerHex>
  )
}

export default Hamburger
