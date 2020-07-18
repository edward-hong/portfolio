import {
  ProjectListItem,
  ProjectItemHeader,
  ProjectItemHeaderImage,
  ProjectItemHeaderContent,
  MoreHex,
  MoreHexLabel,
} from '../../components/ProjectComponents'

const VoteMole = () => {
  return (
    <ProjectListItem>
      <ProjectItemHeader>
        <ProjectItemHeaderImage bgImage="https://res.cloudinary.com/avatarhzh/image/upload/v1532498453/portfolio/votemole-bg-compressor.jpg" />
        <ProjectItemHeaderContent color="black">
          <h3>VoteMole</h3>
          <h4>Polling App</h4>
          <MoreHex top="0px" left="50%" size={16} bgColor="black">
            <MoreHexLabel>More</MoreHexLabel>
          </MoreHex>
        </ProjectItemHeaderContent>
      </ProjectItemHeader>
    </ProjectListItem>
  )
}

export default VoteMole
