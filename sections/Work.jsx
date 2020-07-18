import useScrollPosition from '@react-hook/window-scroll'
import styled from 'styled-components'

import Hex from '../components/Hex'
import SectionNav from '../components/SectionNav'
import VoteMole from './projects/VoteMole'
import Roamm from './projects/Roamm'
import Nasm from './projects/Nasm'

const Wrapper = styled.section`
  clear: both;
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

const Landing = styled.div`
  height: 100vh;
  width: calc(100vw - (100vw - 100%));
  margin: 0px;
  background-color: white;
  top: ${({ outOfRange, top }) => (outOfRange ? `${top}px` : '0px')};

  @media screen and (min-width: 992px) {
    width: calc(50vw - ((100vw - 100%) / 2));
    float: left;
    position: ${({ inRange }) => (inRange ? 'fixed' : 'relative')};
  }
`

const Heading = styled.h2`
  height: 55vh;
  display: flex;
  justify-content: center;
  padding-top: 15vh;
  margin: 0;

  img {
    align-items: center;
    width: 65%;
    margin-bottom: 0%;
    max-width: 350px;
  }
`

const ProjectsNav = styled.nav`
  height: 18vh;
  display: block;
  text-align: center;
  font-size: 1rem;
`

const ProjectsNavItems = styled.ul`
  margin: 0px;
  padding: 0px;
`

const ProjectsNavItem = styled.li`
  display: inline;

  &:nth-child(2)::before,
  &:nth-child(3)::before {
    content: '|';
    padding: 0px 6px 0px 3px;
  }
`

const ProjectsNavLink = styled.a`
  color: black;
  text-decoration: none;
`
const Projects = styled.ul`
  margin: 0;
  padding: 0;

  @media screen and (min-width: 992px) {
    width: calc(50vw - ((100vw - 100%) / 2));
    float: right;
  }
`

const Work = () => {
  const scrollY = useScrollPosition()

  let inRange
  let outOfRange
  let top

  if (process.browser && document.getElementById('projects')) {
    const projectSectionHeight = document.getElementById('projects')
      .clientHeight

    inRange =
      scrollY > 2 * window.innerHeight &&
      scrollY < projectSectionHeight + window.innerHeight
    outOfRange = scrollY > projectSectionHeight + window.innerHeight
    top = projectSectionHeight - window.innerHeight
  }

  return (
    <Wrapper id="work">
      <Close
        href="#"
        size={11}
        bgColor={'transparent'} // PRIMARY_COLOR
        top="0px"
        left="50%"
      ></Close>
      <Landing inRange={inRange} outOfRange={outOfRange} top={top}>
        <Heading>
          <img
            src="https://res.cloudinary.com/avatarhzh/image/upload/v1521343688/portfolio/work.svg"
            alt="Work"
          />
        </Heading>
        <ProjectsNav>
          <ProjectsNavItems>
            <ProjectsNavItem>
              <ProjectsNavLink href="#">VoteMole</ProjectsNavLink>
            </ProjectsNavItem>
            <ProjectsNavItem>
              <ProjectsNavLink href="#">Roamm</ProjectsNavLink>
            </ProjectsNavItem>
            <ProjectsNavItem>
              <ProjectsNavLink href="#">Nation of Social Media</ProjectsNavLink>
            </ProjectsNavItem>
          </ProjectsNavItems>
        </ProjectsNav>
        <SectionNav color="black" />
      </Landing>
      <Projects id="projects">
        <VoteMole />
        <Roamm />
        <Nasm />
      </Projects>
    </Wrapper>
  )
}

export default Work
