import styled from 'styled-components'

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

const NasmItemHeaderImage = styled(ProjectItemHeaderImage)`
  background-image: linear-gradient(
      rgba(51, 51, 51, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(https://res.cloudinary.com/avatarhzh/image/upload/v1532507135/portfolio/nasm-bg-compressor.jpg);
`

const Nasm = ({ selected, handleMore, handleClose }) => {
  const handleNext = (e) => {
    e.preventDefault()
    handleClose()
    setTimeout(() => {
      handleMore('votemole')()
    }, 3500)
  }

  return (
    <ProjectListItem
      isVisible={selected === false || selected === 'nasm'}
      selected={selected === 'nasm'}
      id="nasm"
    >
      <ProjectItemHeader selected={selected === 'nasm'}>
        <NasmItemHeaderImage
          bgImage="https://res.cloudinary.com/avatarhzh/image/upload/v1532505080/portfolio/roam-bg-compressor.jpg"
          selected={selected === 'nasm'}
        />
        <ProjectItemHeaderContent selected={selected === 'nasm'} color="white">
          <h3>Nation of Social Media</h3>
          <h4>Social Media Data Visualisation</h4>
          <MoreHex
            onClick={debounceEvent(handleMore('nasm'), 1000)}
            top="0px"
            left="50%"
            size={16}
            bgColor={selected === 'nasm' ? 'transparent' : 'black'}
            selected={selected === 'nasm'}
          >
            <MoreHexLabel selected={selected === 'nasm'}>More</MoreHexLabel>
          </MoreHex>
        </ProjectItemHeaderContent>
      </ProjectItemHeader>
      <ProjectItemBody>
        <ProjectItemParagraph>
          Nation of Social Media lets users enter an account name of a Youtube
          channel, Twitter or Instagram handle to the app. Then the user can
          find out whether the number of subscribers/followers the account has
          is more than the population of the countries around the world. The
          number of subscribers/followers can also be compared with American
          states and county populations.
        </ProjectItemParagraph>
        <HexContainer>
          <ProjectHex
            size={20}
            bgColor={SECONDARY_COLOR}
            left="46px"
            href="https://nation-of-social-media.herokuapp.com"
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
            href="https://github.com/edward-hong/nation-of-social-media"
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
              Account data from Youtube and Twitter is derived from their
              respective APIs
            </span>
          </ProjectBodyListItem>
          <ProjectBodyListItem>
            <span>
              Instagram doesn't provide a relevant API. To get around this
              problem, requests are made to Instagram's own backend search
              engine instead
            </span>
          </ProjectBodyListItem>
          <ProjectBodyListItem>
            <span>Users can share app via Tweets</span>
          </ProjectBodyListItem>
          <ProjectBodyListItem>
            <span>
              The interactive maps are made with a jQuery plugin called
              jVectorMap
            </span>
          </ProjectBodyListItem>
          <ProjectBodyListItem>
            <span>Responsive design that fit all devices</span>
          </ProjectBodyListItem>
        </ProjectBodyList>
        <picture>
          <source
            srcSet="https://res.cloudinary.com/avatarhzh/image/upload/v1532507280/portfolio/nasm-mobile-compressor.png"
            media="(min-device-width: 320px) and (max-device-width: 480px)"
          />
          <ProjectBodyImage
            src="https://res.cloudinary.com/avatarhzh/image/upload/v1532507429/portfolio/nasm-preview-compressor.png"
            alt="Nation of Social Media preview"
          />
        </picture>
        <ProjectBodyHeading>Tech Stack and Libraries</ProjectBodyHeading>
        <ProjectBodySubHeading>
          Frontend Stack, UI Libraries and APIs
        </ProjectBodySubHeading>
        <TechIconsContainer>
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1523074801/portfolio/tech-stack/jquery.svg"
              alt="jQuery logo"
            />
            jQuery
          </TechIcon>{' '}
          <TechIcon iconWidth="80px" iconHeight="26px">
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1523076516/portfolio/tech-stack/jVectorMap.png"
              alt="jVectorMap logo"
            />
            jVectorMap
          </TechIcon>{' '}
          <TechIcon iconWidth="40px">
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1532327794/portfolio/tech-stack/sass.svg"
              alt="Sass logo"
            />
            Sass
          </TechIcon>{' '}
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1523075751/portfolio/tech-stack/youtube.svg"
              alt="Youtube logo"
            />
            Youtube API
          </TechIcon>{' '}
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1523076230/portfolio/tech-stack/twitter.svg"
              alt="Twitter logo"
            />
            Twitter API
          </TechIcon>{' '}
          <TechIcon>
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1522478251/portfolio/tech-stack/font-awesome.svg"
              alt="Font Awesome logo"
            />
            Font Awesome
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
          <TechIcon iconWidth="45px">
            <img
              src="https://res.cloudinary.com/avatarhzh/image/upload/v1561370745/portfolio/tech-stack/handlebars.png"
              alt="Express Handlebars logo"
            />
            Handlebars
          </TechIcon>
        </TechIconsContainer>
        <picture>
          <source
            srcSet="https://res.cloudinary.com/avatarhzh/image/upload/v1532507737/portfolio/nasm-preview-2-mobile-compressor.png"
            media="(min-device-width: 320px) and (max-device-width: 480px)"
          />
          <ProjectBodyImage
            src="https://res.cloudinary.com/avatarhzh/image/upload/v1532507611/portfolio/nasm-preview-2-compressor.png"
            alt="Nation of Social Media Preview 2"
          />
        </picture>
        <NextLinkContainer>
          <NextHex
            onClick={handleNext}
            top="0px"
            left="50%"
            size={16}
            bgColor={'black'}
          >
            <NextHexLabel>Next</NextHexLabel>
          </NextHex>
        </NextLinkContainer>
      </ProjectItemBody>
    </ProjectListItem>
  )
}

export default Nasm
