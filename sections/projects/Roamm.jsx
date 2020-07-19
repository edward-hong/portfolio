import {
  ProjectListItem,
  ProjectItemHeader,
  ProjectItemHeaderImage,
  ProjectItemHeaderContent,
  MoreHex,
  MoreHexLabel,
} from '../../components/ProjectComponents'

const Roamm = ({ selected, setSelected }) => {
  const handleMore = (e) => {
    e.preventDefault()
    setSelected('roamm')
  }
  return (
    <ProjectListItem isVisible={selected === false || selected === 'roamm'}>
      <ProjectItemHeader>
        <ProjectItemHeaderImage bgImage="https://res.cloudinary.com/avatarhzh/image/upload/v1532505080/portfolio/roam-bg-compressor.jpg" />
        <ProjectItemHeaderContent color="white">
          <h3>Roamm</h3>
          <h4>Night Life Coordination</h4>
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

export default Roamm
