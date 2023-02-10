// external imports
import { FC } from "react"

// internal imports
import FeaturedProject from "../project/project.component";

//styles
import { FeaturedProjectsContainer } from "./featured-section.styles";

// types
import { Project } from "../../utils/projects"
type FeaturedSectionProps = {
  projects: Project[];  
}

const FeaturedSection:FC<FeaturedSectionProps> = ({ projects }) => {
  return (
    <FeaturedProjectsContainer>
      {projects.map((project, index) => (
        <FeaturedProject project={project} key={index} />
      ))}
    </FeaturedProjectsContainer>
  )
}

export default FeaturedSection