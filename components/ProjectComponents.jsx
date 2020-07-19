import styled from 'styled-components'

import Hex from './Hex'

export const ProjectListItem = styled.li`
  height: 100vh;
  width: calc(100vw - (100vw - 100%));
  display: block;
  position: relative;
  transition: height 1s ease-in-out 0.5s;
  overflow: visible; // hidden

  &:hover div div:first-child {
    transform: scale(1.3);
  }

  @media screen and (min-width: 992px) {
    width: 100%;
    float: right;
  }
`

export const ProjectItemHeader = styled.div`
  height: 100vh;
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
  transition: all 15s ease 0s;
`

export const ProjectItemHeaderContent = styled.div`
  display: inline-block;
  width: 100%;
  top: 29vh;
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
  position: relative;
  text-decoration: none;

  ${[1, 2, 3, 4, 5, 6].map(
    (i) => `
    &:hover span:nth-child(${i}) {
    border-left-color: rgb(41, 41, 41);
    transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.08}s;
  }
  `,
  )}
`

export const MoreHexLabel = styled.span`
  display: inline;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
  position: relative;
  top: 23px;
  color: white;
`
