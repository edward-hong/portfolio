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

  @media screen and (min-width: 992px) {
    width: calc(50vw - ((100vw - 100%) / 2));
    float: left;
  }
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

const SectionInfo = styled.div`
  line-height: 1.5;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 30px 45px;

  p:first-child {
    font-weight: 700;
  }

  @media screen and (min-width: 992px) {
    width: calc(50vw - ((100vw - 100%) / 2));
    float: right;
  }
`

const TechList = styled.ul`
  padding-left: 40px;
  list-style: inside disc;

  li {
    color: ${PRIMARY_COLOR};
    list-style-position: outside;
  }

  span {
    color: black;
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
    <SectionInfo>
      <p>
        I am a full stack Javascript developer from Wellington, New Zealand.
      </p>
      <h3>Tech Stack</h3>
      <p>
        I specialise in web development with React and usually work with the
        MERN stack or React with GraphQL
      </p>
      <h3>List of technologies I'm familiar with include:</h3>
      <TechList>
        <li>
          <span>HTML5 and CSS3</span>
        </li>
        <li>
          <span>Git and Github</span>
        </li>
        <li>
          <span>Bootstrap, Material-UI and Semantic UI</span>
        </li>
        <li>
          <span>Sass/Scss, CSS-in-JS and styled-components</span>
        </li>
        <li>
          <span>Javascript and jQuery</span>
        </li>
        <li>
          <span>RxJS</span>
        </li>
        <li>
          <span>Node</span>
        </li>
        <li>
          <span>React</span>
        </li>
        <li>
          <span>Redux, Redux-Thunk and Redux-Observables</span>
        </li>
        <li>
          <span>Next</span>
        </li>
        <li>
          <span>Express3</span>
        </li>
        <li>
          <span>GraphQL, Apollo and Prisma</span>
        </li>
        <li>
          <span>MongoDB and Mongoose</span>
        </li>
        <li>
          <span>PostgreSQL</span>
        </li>
        <li>
          <span>Redis</span>
        </li>
      </TechList>
    </SectionInfo>
  </Wrapper>
)

export default About
