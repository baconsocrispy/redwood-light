//external imports
import { FC } from "react";

// styles
import { 
  AwardsButton,
  AwardsImage, 
  AwardsImageContainer, 
  AwardsProjectContainer, 
  AwardsTitle,
  ContentContainer
} from "./awards-project.styles";

//types
import { Project } from "../../utils/projects"
type AwardsProjectProps = {
  project: Project;
};

// component
const AwardsProject: FC<AwardsProjectProps> = ({ project }) => {
  return (
    <AwardsProjectContainer>
      <AwardsImageContainer>
        <AwardsImage src={ project.image.src } alt={ project.image.alt } />
      </AwardsImageContainer>
      <ContentContainer>
        <AwardsTitle>{ project.name }</AwardsTitle>
        <AwardsButton href={ project.newscastUrl }>
          Learn More
        </AwardsButton>
      </ContentContainer>
    </AwardsProjectContainer>
  )
}

export default AwardsProject