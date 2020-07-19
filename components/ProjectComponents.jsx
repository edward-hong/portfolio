import styled from 'styled-components'

import Hex from './Hex'
import { PRIMARY_COLOR, TECH_BG_COLOR } from '../constants'

export const ProjectListItem = styled.li`
  height: ${({ selected }) => (selected ? 'auto' : '100vh')};
  width: calc(100vw - (100vw - 100%));
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: relative;
  transition: height 1s ease-in-out 0.5s;
  overflow: ${({ selected }) => (selected ? 'visible' : 'hidden')};

  &:hover div div:first-child {
    transform: ${({ selected }) => (selected ? 'none' : 'scale(1.3)')};
  }

  @media screen and (min-width: 992px) {
    width: 100%;
    float: right;
  }
`

export const ProjectItemHeader = styled.div`
  height: ${({ selected }) => (selected ? '55vh' : '100vh')};
  width: calc(100vw - (100vw - 100%));
  transition: height 1s ease-in-out 0.5s;

  @media screen and (min-width: 992px) {
    width: 100%;
  }
`

export const ProjectItemHeaderImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${({ bgImage }) => bgImage});
  background-position: center center;
  transition: ${({ selected }) => (selected ? '0s' : 'all 15s ease 0s')};
`

export const ProjectItemHeaderContent = styled.div`
  display: inline-block;
  width: 100%;
  top: ${({ selected }) => (selected ? '15vh' : '29vh')};
  text-align: center;
  position: absolute;
  color: ${({ color }) => color};
  transition: top 1s ease-in-out 0.5s;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 400;
    margin: 0.8rem 0px;
  }
`

export const MoreHex = styled(Hex)`
  display: ${({ selected }) => (selected ? 'none' : 'inline-block')};
  position: relative;
  text-decoration: none;
  cursor: ${({ selected }) => (selected ? 'default' : 'pointer')};
  ${({ selected }) =>
    selected
      ? null
      : [1, 2, 3, 4, 5, 6].map(
          (i) => `
    &:hover span:nth-child(${i}) {
    border-left-color: rgb(41, 41, 41);
    transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.08}s;
  }
  `,
        )};
`

export const NextHex = styled(Hex)`
  position: relative;
  text-decoration: none;
  ${[1, 2, 3, 4, 5, 6].map(
    (i) => `
    &:hover span:nth-child(${i}) {
    border-left-color: rgb(41, 41, 41);
    transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.08}s;
  }
  `,
  )};
`

export const MoreHexLabel = styled.span`
  display: ${({ selected }) => (selected ? 'none' : 'inline')};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
  position: relative;
  top: 23px;
  color: white;
`

export const NextHexLabel = styled.span`
  display: inline;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
  position: relative;
  top: 23px;
  left: 11px;
  color: white;
`

export const ProjectItemBody = styled.div`
  padding: 30px 45px;
`

export const ProjectItemParagraph = styled.p`
  line-height: 1.5;
  font-size: 1.2rem;
`

export const HexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`

export const ProjectHex = styled(Hex)`
  position: relative;
  display: inline-block;
  margin-right: 5px;
`

export const LinkWrapper = styled.div`
  width: 2.5em;
  height: 2.5em;
  position: relative;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  z-index: 2;
  fill: white;
`

export const ProjectBodyHeading = styled.h3`
  font-weight: 700;
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 30px;
`

export const ProjectBodySubHeading = styled.h4`
  font-weight: 700;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 15px;
`

export const ProjectBodyList = styled.ul`
  margin-bottom: 40px;
  list-style: inside disc;

  @media screen and (min-width: 991px) {
    margin-bottom: 70px;
  }
`

export const ProjectBodyListItem = styled.li`
  @media screen and (min-width: 991px) {
    margin: 0px 60px;
  }

  color: ${PRIMARY_COLOR};
  list-style-position: outside;
  line-height: 1.5;

  span {
    color: black;
  }
`

export const ProjectBodyImage = styled.img`
  display: block;
  width: calc(100% + 90px);
  position: relative;
  left: -45px;
  margin: 40px 0px;
`

export const TechIconsContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
  line-height: 3;
  padding: 0px 40px;
`

export const TechIcon = styled.span`
  background-color: ${TECH_BG_COLOR};
  color: white;
  white-space: nowrap;
  border-radius: 10px;
  padding: 12px;

  img {
    width: ${({ iconWidth }) => iconWidth || '30px'};
    height: ${({ iconHeight }) => iconHeight || 'auto'};
    display: inline-block;
    vertical-align: middle;
    margin: 0px 5px 0px 0px;
  }
`
export const NextLinkContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 0 60px;
  padding: 0 100px;
`
