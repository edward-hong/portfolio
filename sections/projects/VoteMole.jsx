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

const VoteMole = ({ selected, setSelected }) => {
  const handleMore = (e) => {
    e.preventDefault()
    document.getElementById('votemole').scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      if (process.browser) {
        window.scrollBy(0, 0)
      }
      setSelected('votemole')
    }, 2000)
  }
  return (
    <ProjectListItem
      isVisible={selected === false || selected === 'votemole'}
      selected={selected === 'votemole'}
      id="votemole"
    >
      <ProjectItemHeader selected={selected === 'votemole'}>
        <ProjectItemHeaderImage
          bgImage="https://res.cloudinary.com/avatarhzh/image/upload/v1532498453/portfolio/votemole-bg-compressor.jpg"
          selected={selected === 'votmole'}
        />
        <ProjectItemHeaderContent
          selected={selected === 'votemole'}
          color="black"
        >
          <h3>VoteMole</h3>
          <h4>Polling App</h4>
          <MoreHex
            onClick={debounceEvent(handleMore, 1000)}
            top="0px"
            left="50%"
            size={16}
            bgColor={selected === 'votemole' ? 'transparent' : 'black'}
            selected={selected === 'votemole'}
          >
            <MoreHexLabel selected={selected === 'votemole'}>More</MoreHexLabel>
          </MoreHex>
        </ProjectItemHeaderContent>
      </ProjectItemHeader>
      <ProjectItemBody>
        <ProjectItemParagraph>
          VoteMole is polling app where users can create and vote on polls.
        </ProjectItemParagraph>
        <HexContainer>
          <ProjectHex
            size={20}
            bgColor={SECONDARY_COLOR}
            left="46px"
            href="https://votemole.herokuapp.com"
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
            href="https://github.com/edward-hong/votemole"
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
            <span>
              Oauth authentication with Facebook, Google, Twitter and Github
            </span>
          </ProjectBodyListItem>
          <ProjectBodyListItem>
            <span>Real time form validation</span>
          </ProjectBodyListItem>
          <ProjectBodyListItem>
            <span>Data caching with Redis</span>
          </ProjectBodyListItem>
          <ProjectBodyListItem>
            <span>Pagination for navigating through the list of polls</span>
          </ProjectBodyListItem>
          <ProjectBodyListItem>
            <span>
              Frontend unit tested with Jest and React Testing Library with 100%
              test coverage
            </span>
          </ProjectBodyListItem>
          <ProjectBodyListItem>
            <span>
              Continuous Integration with Travis CI, Coveralls and David
            </span>
          </ProjectBodyListItem>
          <ProjectBodyListItem>
            <span>Responsive design that fit all devices</span>
          </ProjectBodyListItem>
        </ProjectBodyList>
        <picture>
          <source
            srcSet="https://res.cloudinary.com/avatarhzh/image/upload/v1532499368/portfolio/votemole-mobile-compressor.png"
            media="(min-device-width: 320px) and (max-device-width: 480px)"
          />
          <ProjectBodyImage
            src="https://res.cloudinary.com/avatarhzh/image/upload/v1532498673/portfolio/votemole-preview-compressor.png"
            alt="VoteMole preview"
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
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1522483663/portfolio/tech-stack/react-router.png"
              alt="React Router logo"
            />
            React Router
          </TechIcon>{' '}
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1522478254/portfolio/tech-stack/redux.svg"
              alt="Redux logo"
            />
            Redux
          </TechIcon>{' '}
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1595142864/portfolio/tech-stack/formik.png"
              alt="Formik logo"
            />
            Formik
          </TechIcon>{' '}
          <TechIcon iconWidth="40px">
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1561464200/portfolio/tech-stack/redux-observable.png"
              alt="Redux Observable logo"
            />
            Redux Observable
          </TechIcon>{' '}
          <TechIcon iconWidth="40px">
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1561464199/portfolio/tech-stack/rxjs.png"
              alt="RxJS logo"
            />
            RxJS
          </TechIcon>{' '}
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1522478251/portfolio/tech-stack/bootstrap.svg"
              alt="Bootstrap logo"
            />
            Bootstrap
          </TechIcon>
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1532327794/portfolio/tech-stack/reactstrap.svg"
              alt="Reactstrap logo"
            />
            Reactstrap
          </TechIcon>{' '}
          <TechIcon iconWidth="56px" iconHeight="25px">
            <img
              style={{ marginBottom: 4 }}
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1561360519/portfolio/tech-stack/styled-components.png"
              alt="styled components logo"
            />
            styled components
          </TechIcon>{' '}
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1522478251/portfolio/tech-stack/font-awesome.svg"
              alt="Font Awesome logo"
            />
            Font Awesome
          </TechIcon>{' '}
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1522478251/portfolio/tech-stack/chartjs.svg"
              alt="Chart.js logo"
            />
            Chart.js
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
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1537266330/portfolio/tech-stack/redis.svg"
              alt="Redis logo"
            />
            Redis
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
            srcSet="https://res.cloudinary.com/avatarhzh/image/upload/v1532501510/portfolio/votemole-preview-2-mobile-compressor.png"
            media="(min-device-width: 320px) and (max-device-width: 480px)"
          />
          <ProjectBodyImage
            src="https://res.cloudinary.com/avatarhzh/image/upload/v1532504180/portfolio/vote-mole-preview-2-compressor.png"
            alt="VoteMole Preview 2"
          />
        </picture>
        <NextLinkContainer>
          <NextHex top="0px" left="50%" size={16} bgColor={'black'}>
            <NextHexLabel>Next</NextHexLabel>
          </NextHex>
        </NextLinkContainer>
      </ProjectItemBody>
    </ProjectListItem>
  )
}

export default VoteMole
