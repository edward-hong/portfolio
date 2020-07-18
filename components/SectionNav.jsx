import styled from 'styled-components'

import scrollTo from '../utils/scrollTo'

const Nav = styled.nav`
  height: 12vh;
  display: block;
  text-align: center;
  font-size: 1rem;

  @media screen and (max-width: 993px) {
    display: ${({ show }) => (show ? 'block' : 'none')};
  }
`

const NavItems = styled.ul`
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  display: inline;

  &:nth-child(2)::before,
  &:nth-child(3)::before {
    content: '|';
    color: ${({ color }) => color};
    padding: 0px 11px 0px 9px;
  }
`

const NavLink = styled.a`
  color: ${({ color }) => color};
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  text-decoration: none;

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    top: 30px;
    left: 0px;
    bottom: 0px;
    opacity: 0;
    transform: translate(0px, 100%);
    background-color: ${({ color }) => color};
    transition: transform 0.2s cubic-bezier(0.84, 0.41, 0, 1.2) 0s,
      opacity 0.2s ease-out 0s;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`

const SectionNav = ({ color, show }) => {
  return (
    <Nav show={show}>
      <NavItems>
        <NavItem color={color}>
          <NavLink onClick={scrollTo('about')} href="#" color={color}>
            About
          </NavLink>
        </NavItem>
        <NavItem color={color}>
          <NavLink onClick={scrollTo('work')} href="#" color={color}>
            Work
          </NavLink>
        </NavItem>
        <NavItem color={color}>
          <NavLink onClick={scrollTo('contact')} href="#" color={color}>
            Contact
          </NavLink>
        </NavItem>
      </NavItems>
    </Nav>
  )
}

export default SectionNav
