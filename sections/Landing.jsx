import styled from 'styled-components'

import scrollTo from '../utils/scrollTo'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants'

const Wrapper = styled.section`
  height: 100vh;
  width: calc(100vw - (100vw - 100%));
  color: ${PRIMARY_COLOR};
  background-color: ${SECONDARY_COLOR};
`
const SubHeading = styled.h2`
  box-sizing: border-box;
  text-align: center;
  padding-top: 5vh;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.8rem;
  height: 10vh;
  line-height: 1.1;
  max-width: 65%;
  margin: 0px auto;
`

const MainHeading = styled.h1`
  height: 78vh;
  display: flex;
  justify-content: center;
  margin: 0px;
`

const Logo = styled.img`
  align-self: center;
  width: 90%;
  max-width: 500px;
  margin-bottom: 2%;
`

const DesktopNav = styled.nav`
  height: 12vh;
  text-align: center;
  font-size: 1rem;
  display: block;
`

const DesktopNavList = styled.ul`
  margin: 0px;
  padding: 0px;
`

const DesktopNavItem = styled.li`
  display: inline;

  &:nth-child(2)::before,
  &:nth-child(3)::before {
    content: '|';
    color: ${PRIMARY_COLOR};
    padding: 0px 11px 0px 9px;
  }
`

const DesktopNavLink = styled.a`
  color: ${PRIMARY_COLOR};
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
    background-color: ${PRIMARY_COLOR};
    transition: transform 0.2s cubic-bezier(0.84, 0.41, 0, 1.2) 0s,
      opacity 0.2s ease-out 0s;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`

const Landing = () => (
  <Wrapper>
    <SubHeading>Full Stack Javascript Developer</SubHeading>
    <MainHeading>
      <Logo
        src="https://res.cloudinary.com/avatarhzh/image/upload/v1521343685/portfolio/logo.svg"
        alt="Edward Hong logo"
      />
    </MainHeading>
    <DesktopNav>
      <DesktopNavList>
        <DesktopNavItem>
          <DesktopNavLink onClick={scrollTo('about')} href="#">
            About
          </DesktopNavLink>
        </DesktopNavItem>
        <DesktopNavItem>
          <DesktopNavLink href="#">Work</DesktopNavLink>
        </DesktopNavItem>
        <DesktopNavItem>
          <DesktopNavLink onClick={scrollTo('contact')} href="#">
            Contact
          </DesktopNavLink>
        </DesktopNavItem>
      </DesktopNavList>
    </DesktopNav>
  </Wrapper>
)

export default Landing
