import styled from 'styled-components'

import Hex from '../components/Hex'
import { SECONDARY_COLOR } from '../constants'

const Wrapper = styled.section`
  clear: both;
`

const Landing = styled.div`
  height: 100vh;
  width: calc(100vw - (100vw - 100%));
  margin: 0px;
  background-color: ${SECONDARY_COLOR};

  @media screen and (min-width: 992px) {
    width: calc(50vw - ((100vw - 100%) / 2));
    float: left;
  }
`

const HexLinks = styled.div`
  display: flex;
  margin-bottom: 50px;
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

  @media screen and (min-width: 992px) {
    width: calc(50vw - ((100vw - 100%) / 2));
    float: right;
  }
`

const LinkWrapper = styled.div`
  width: 2.5em;
  height: 2.5em;
  position: relative;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  z-index: 2;
  fill: white;
`

const Contact = () => (
  <Wrapper id="contact">
    <Landing>
      <Heading>
        <img
          src="https://res.cloudinary.com/avatarhzh/image/upload/v1521343685/portfolio/contact.svg"
          alt="Contact"
        />
      </Heading>
    </Landing>
    <SectionInfo>
      <p>
        If you want to collaborate on creating amazing websites for people,
        please contact me.
      </p>
      <p>
        I am available for freelance projects and remote full-time employment.
      </p>
      <h3>Edward Hong</h3>
      <p>Full Stack Javascript Developer</p>
      <HexLinks>
        <Hex
          size={20}
          bgColor={SECONDARY_COLOR}
          left="80px"
          href="mailto:edward.hong527@gmail.com"
          target="_blank"
        >
          <LinkWrapper top="0.875em" left="0.5em">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"></path>
            </svg>
          </LinkWrapper>
        </Hex>
        <Hex
          size={20}
          bgColor={SECONDARY_COLOR}
          left="160px"
          href="https://github.com/edward-hong"
          target="_blank"
        >
          <LinkWrapper top="0.875em" left="0.75em">
            <svg viewBox="100 100 600 600">
              <path d="M400 139c144 0 260 116 260 260 0 115-75 213-178 247-9 3-17-2-17-13v-71c0-35-18-48-18-48 57-6 119-28 119-128 0-44-27-70-27-70s14-29-2-69c0 0-22-7-72 27-42-12-88-12-130 0-50-34-72-27-72-27-16 40-2 69-2 69s-27 26-27 70c0 100 62 122 119 128 0 0-14 10-17 35-15 7-53 18-76-22 0 0-13-25-39-27 0 0-26 0-2 16 0 0 17 8 29 38 0 0 16 51 88 35v44c0 11-9 16-18 13-103-34-178-132-178-247 0-144 116-260 260-260z"></path>
            </svg>
          </LinkWrapper>
        </Hex>
        <Hex
          size={20}
          bgColor={SECONDARY_COLOR}
          left="240px"
          href="https://twitter.com/edwardhong527"
          target="_blank"
        >
          <LinkWrapper top="0.875em" left="1em">
            <svg viewBox="100 100 600 600">
              <path d="M679 239s-21 34-55 57c7 156-107 329-314 329-103 0-169-50-169-50s81 17 163-45c-83-5-103-77-103-77s23 6 50-2c-93-23-89-110-89-110s23 14 50 14c-84-65-34-148-34-148s76 107 228 116c-22-121 117-177 188-101 37-6 71-27 71-27s-12 41-49 61c30-2 63-17 63-17z"></path>
            </svg>
          </LinkWrapper>
        </Hex>
      </HexLinks>
    </SectionInfo>
  </Wrapper>
)

export default Contact
