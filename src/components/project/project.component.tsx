// external imports
import { FC } from "react";

// styles
import {
  LearnMoreButton,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectImageContainer,
} from "./project.styles";

//types
import { Project } from "../../utils/projects";
type ProjectProps = {
  project: Project;
};

// component
const FeaturedProject: FC<ProjectProps> = ({ project }) => {
  const { name, newscastUrl, image } = project;
  return (
    <ProjectContainer>
      <ProjectImageContainer>
        <ProjectImage src={ image.src } alt={ image.alt } />
      </ProjectImageContainer>
      <ProjectHeader>{name}</ProjectHeader>
      <LearnMoreButton to={ newscastUrl }>
        learn more
      </LearnMoreButton>
    </ProjectContainer>
  );
};

export default FeaturedProject;
