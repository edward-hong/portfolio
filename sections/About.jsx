import styled from 'styled-components'

import { PRIMARY_COLOR } from '../constants'

const Wrapper = styled.section`
  z-index: 3;
`

const Landing = styled.div`
  height: 100vh;
  width: calc(100vw - (100vw - 100%));
  margin: 0px;
  background-color: ${PRIMARY_COLOR};
`

const Heading = styled.h2`
  height: 88vh;
  display: flex;
  justify-content: center;
  padding-top: 0vh;
  margin: 0px;

  img {
    align-items: center;
    width: 65%;
    margin-bottom: 5%;
    max-width: 350px;
  }
`

const About = () => (
  <Wrapper id="about">
    <Landing>
      <Heading>
        <img
          src="https://res.cloudinary.com/avatarhzh/image/upload/v1521343685/portfolio/about.svg"
          alt="About"
        />
      </Heading>
    </Landing>
  </Wrapper>
)

export default About
