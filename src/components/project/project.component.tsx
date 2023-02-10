// external imports
import { FC } from "react"

//types
import { Project } from "../../utils/projects"
import { ProjectContainer, ProjectHeader, ProjectImage, ProjectImageContainer } from "./project.styles";
type ProjectProps = {
  project: Project;
}
const FeaturedProject:FC<ProjectProps> = ({ project }) => {
  const { name, client, newscastUrl, image, } = project;
  return (
    <ProjectContainer>
      <ProjectHeader>{ name }</ProjectHeader>
      <ProjectImageContainer>
        <ProjectImage src={image.src } alt={image.alt} />
      </ProjectImageContainer>
    </ProjectContainer>
  )
}

export default FeaturedProject