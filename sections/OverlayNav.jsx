import styled from 'styled-components'

import { PRIMARY_COLOR } from '../constants'

const Overlay = styled.section`
  height: 100vh;
  width: calc(100vw - (100vw - 100%));
  display: ${({ isOpen }) => (isOpen ? 'table' : 'none')};
  position: fixed;
  z-index: 5;
  background-color: white;
`

const OverlayNavList = styled.ul`
  display: table-cell;
  vertical-align: middle;
  padding: 0px;
`

const OverlayNavItem = styled.li`
  display: block;
  line-height: 4;
  text-align: center;
`

const OverlayNavLink = styled.a`
  color: ${PRIMARY_COLOR};
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  text-decoration: none;
  animation: 0.5s ease 0s 1 normal none running fadein;

  &::after {
    top: 60px;
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    opacity: 0;
    transform: translate(0px, 100%);
    background-color: ${PRIMARY_COLOR};
    transition: transform 0.2s cubic-bezier(0.84, 0.41, 0, 1.2) 0s,
      opacity 0.2s ease-out 0s;
  }

  &:hover::after {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`

const OverlayNav = ({ isOpen }) => (
  <Overlay isOpen={isOpen}>
    <OverlayNavList>
      <OverlayNavItem>
        <OverlayNavLink href="#">About</OverlayNavLink>
      </OverlayNavItem>
      <OverlayNavItem>
        <OverlayNavLink href="#">Work</OverlayNavLink>
      </OverlayNavItem>
      <OverlayNavItem>
        <OverlayNavLink href="#">Contact</OverlayNavLink>
      </OverlayNavItem>
    </OverlayNavList>
  </Overlay>
)

export default OverlayNav
