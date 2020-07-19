import styled from 'styled-components'

import {
  ProjectListItem,
  ProjectItemHeader,
  ProjectItemHeaderImage,
  ProjectItemHeaderContent,
  MoreHex,
  MoreHexLabel,
} from '../../components/ProjectComponents'

const NasmItemHeaderImage = styled(ProjectItemHeaderImage)`
  background-image: linear-gradient(
      rgba(51, 51, 51, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(https://res.cloudinary.com/avatarhzh/image/upload/v1532507135/portfolio/nasm-bg-compressor.jpg);
`

const Nasm = ({ selected, setSelected }) => {
  const handleMore = (e) => {
    e.preventDefault()
    setSelected('nasm')
  }
  return (
    <ProjectListItem isVisible={selected === false || selected === 'nasm'}>
      <ProjectItemHeader>
        <NasmItemHeaderImage bgImage="https://res.cloudinary.com/avatarhzh/image/upload/v1532505080/portfolio/roam-bg-compressor.jpg" />
        <ProjectItemHeaderContent color="white">
          <h3>Nation of Social Media</h3>
          <h4>Social Media Data Visualisation</h4>
          <MoreHex
            onClick={handleMore}
            top="0px"
            left="50%"
            size={16}
            bgColor="black"
          >
            <MoreHexLabel>More</MoreHexLabel>
          </MoreHex>
        </ProjectItemHeaderContent>
      </ProjectItemHeader>
    </ProjectListItem>
  )
}

export default Nasm
