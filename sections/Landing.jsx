import styled from 'styled-components'

import SectionNav from '../components/SectionNav'
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

const Landing = () => (
  <Wrapper>
    <SubHeading>Full Stack Javascript Developer</SubHeading>
    <MainHeading>
      <Logo
        src="https://res.cloudinary.com/avatarhzh/image/upload/v1521343685/portfolio/logo.svg"
        alt="Edward Hong logo"
      />
    </MainHeading>
    <SectionNav color={PRIMARY_COLOR} />
  </Wrapper>
)

export default Landing
