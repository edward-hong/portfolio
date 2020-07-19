import {
  ProjectListItem,
  ProjectItemHeader,
  ProjectItemHeaderImage,
  ProjectItemHeaderContent,
  MoreHex,
  MoreHexLabel,
  NextHex,
  NextHexLabel,
  ProjectItemBody,
  ProjectItemParagraph,
  HexContainer,
  ProjectHex,
  LinkWrapper,
  ProjectBodyHeading,
  ProjectBodySubHeading,
  ProjectBodyList,
  ProjectBodyListItem,
  ProjectBodyImage,
  TechIconsContainer,
  TechIcon,
  NextLinkContainer,
} from '../../components/ProjectComponents'
import debounceEvent from '../../utils/debounceEvent'
import { SECONDARY_COLOR } from '../../constants'

const Roamm = ({ selected, setSelected }) => {
  const handleMore = (e) => {
    e.preventDefault()
    document.getElementById('roamm').scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      if (process.browser) {
        window.scrollBy(0, -window.innerHeight)
      }
      setSelected('roamm')
    }, 2000)
  }
  return (
    <ProjectListItem
      isVisible={selected === false || selected === 'roamm'}
      selected={selected === 'roamm'}
      id="roamm"
    >
      <ProjectItemHeader selected={selected === 'roamm'}>
        <ProjectItemHeaderImage
          bgImage="https://res.cloudinary.com/avatarhzh/image/upload/v1532505080/portfolio/roam-bg-compressor.jpg"
          selected={selected === 'roamm'}
        />
        <ProjectItemHeaderContent selected={selected === 'roamm'} color="white">
          <h3>Roamm</h3>
          <h4>Night Life Coordination</h4>
          <MoreHex
            onClick={debounceEvent(handleMore, 1000)}
            top="0px"
            left="50%"
            size={16}
            bgColor={selected === 'roamm' ? 'transparent' : 'black'}
            selected={selected === 'roamm'}
          >
            <MoreHexLabel selected={selected === 'roamm'}>More</MoreHexLabel>
          </MoreHex>
        </ProjectItemHeaderContent>
      </ProjectItemHeader>
      <ProjectItemBody>
        <ProjectItemParagraph>
          Roamm is a night life coordination app. Users can search for bars and
          clubs around their local area and choose which places they want to go
          to.
        </ProjectItemParagraph>
        <HexContainer>
          <ProjectHex
            size={20}
            bgColor={SECONDARY_COLOR}
            left="46px"
            href="https://roamm.herokuapp.com"
            target="_blank"
          >
            <LinkWrapper top="0.875em" left="1em">
              <svg viewBox="2 2 20 20">
                <path d="M15.387 4.33c-2.1 0-3.6 1.9-5.1 3.3.2 0 .5-.1.8-.1.5 0 1 .1 1.5.3.8-.8 1.6-1.7 2.8-1.7.6 0 1.3.3 1.8.7 1 1 1 2.6 0 3.6l-2.6 2.6c-.4.4-1.2.7-1.8.7-1.4 0-2.1-.9-2.6-2l-1.3 1.3c.8 1.5 2 2.6 3.8 2.6 1.2 0 2.3-.5 3-1.3l2.6-2.6c.9-.9 1.5-2 1.5-3.3-.2-2.2-2.2-4.1-4.4-4.1zm-4.3 12.1l-.9.9c-.4.4-1.2.7-1.8.7-.6 0-1.3-.3-1.8-.7-1-1-1-2.7 0-3.6l2.6-2.6c.4-.4 1.2-.7 1.8-.7 1.4 0 2.1 1 2.6 2l1.3-1.3c-.8-1.5-2-2.6-3.8-2.6-1.2 0-2.3.5-3 1.3l-2.6 2.6c-1.7 1.7-1.7 4.4 0 6 1.6 1.6 4.4 1.7 5.9 0l1.9-1.9c-.3.1-.6.1-.9.1-.5 0-.9 0-1.3-.2z"></path>
              </svg>
            </LinkWrapper>
          </ProjectHex>
          <ProjectHex
            size={20}
            bgColor={SECONDARY_COLOR}
            left="46px"
            href="https://github.com/edward-hong/roamm"
            target="_blank"
          >
            <LinkWrapper top="0.875em" left="1em">
              <svg viewBox="100 100 600 600">
                <path d="M400 139c144 0 260 116 260 260 0 115-75 213-178 247-9 3-17-2-17-13v-71c0-35-18-48-18-48 57-6 119-28 119-128 0-44-27-70-27-70s14-29-2-69c0 0-22-7-72 27-42-12-88-12-130 0-50-34-72-27-72-27-16 40-2 69-2 69s-27 26-27 70c0 100 62 122 119 128 0 0-14 10-17 35-15 7-53 18-76-22 0 0-13-25-39-27 0 0-26 0-2 16 0 0 17 8 29 38 0 0 16 51 88 35v44c0 11-9 16-18 13-103-34-178-132-178-247 0-144 116-260 260-260z"></path>
              </svg>
            </LinkWrapper>
          </ProjectHex>
        </HexContainer>
        <ProjectBodyHeading>Features</ProjectBodyHeading>
        <ProjectBodyList>
          <ProjectBodyListItem>
            <span>Server-side rendered</span>
          </ProjectBodyListItem>
          <ProjectBodyListItem>
            <span>Oauth authentication with Facebook</span>
          </ProjectBodyListItem>
          <ProjectBodyListItem>
            <span>Venues data from Yelp Fusion API</span>
          </ProjectBodyListItem>
          <ProjectBodyListItem>
            <span>Seamless Mapbox integration</span>
          </ProjectBodyListItem>
          <ProjectBodyListItem>
            <span>Responsive design that fit all devices</span>
          </ProjectBodyListItem>
        </ProjectBodyList>
        <picture>
          <source
            srcSet="https://res.cloudinary.com/avatarhzh/image/upload/v1532506041/portfolio/roam-mobile-compressor.png"
            media="(min-device-width: 320px) and (max-device-width: 480px)"
          />
          <ProjectBodyImage
            src="https://res.cloudinary.com/avatarhzh/image/upload/v1532505895/portfolio/roam-preview-compressor.png"
            alt="Roamm preview"
          />
        </picture>
        <ProjectBodyHeading>Tech Stack and Libraries</ProjectBodyHeading>
        <ProjectBodySubHeading>
          Frontend Stack, UI Libraries and APIs
        </ProjectBodySubHeading>
        <TechIconsContainer>
          <TechIcon iconWidth="40px" iconHeight="40px">
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1522483374/portfolio/tech-stack/react.svg"
              alt="React logo"
            />
            React
          </TechIcon>{' '}
          <TechIcon iconWidth="43.5px" iconHeight="30px">
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1523067665/portfolio/tech-stack/nextjs.png"
              alt="Next logo"
            />
            Next
          </TechIcon>{' '}
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1523069012/portfolio/tech-stack/semantic-ui-react.png"
              alt="Semantic UI React logo"
            />
            Semantic UI React
          </TechIcon>{' '}
          <TechIcon iconWidth="56px" iconHeight="25px">
            <img
              style={{ marginBottom: 4 }}
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1561360519/portfolio/tech-stack/styled-components.png"
              alt="styled components logo"
            />
            styled components
          </TechIcon>{' '}
          <TechIcon iconWidth="60px" iconHeight="45px">
            <img
              style={{ marginBottom: 5 }}
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1523069669/portfolio/tech-stack/yelp.svg"
              alt="Yelp logo"
            />
            Yelp Fusion API
          </TechIcon>{' '}
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1595153956/portfolio/tech-stack/mapbox.png"
              alt="Mapbox logo"
            />
            Mapbox
          </TechIcon>
        </TechIconsContainer>
        <ProjectBodySubHeading>
          Backend Stack and Database
        </ProjectBodySubHeading>
        <TechIconsContainer>
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1522478251/portfolio/tech-stack/node.svg"
              alt="Node logo"
            />
            Node
          </TechIcon>{' '}
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1522478588/portfolio/tech-stack/express.png"
              alt="Express logo"
            />
            Express
          </TechIcon>{' '}
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1522485362/portfolio/tech-stack/mongo.png"
              alt="MongoDB logo"
            />
            MongoDB
          </TechIcon>{' '}
          <TechIcon iconWidth="71.5px" iconHeight="30px">
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1522485097/portfolio/tech-stack/mongoose.svg"
              alt="Mongoose logo"
            />
            Mongoose
          </TechIcon>{' '}
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1522478255/portfolio/tech-stack/passport.svg"
              alt="Passport.js logo"
            />
            Passport.js
          </TechIcon>
        </TechIconsContainer>
        <picture>
          <source
            srcSet="https://res.cloudinary.com/avatarhzh/image/upload/v1532506931/portfolio/roam-preview-2-mobile-compressor.png"
            media="(min-device-width: 320px) and (max-device-width: 480px)"
          />
          <ProjectBodyImage
            src="https://res.cloudinary.com/avatarhzh/image/upload/v1532506739/portfolio/roam-preview-2-compressor.png"
            alt="Roamm Preview 2"
          />
        </picture>
      </ProjectItemBody>
      <NextLinkContainer>
        <NextHex top="0px" left="50%" size={16} bgColor={'black'}>
          <NextHexLabel>Next</NextHexLabel>
        </NextHex>
      </NextLinkContainer>
    </ProjectListItem>
  )
}

export default Roamm
