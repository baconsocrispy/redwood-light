// external imports
import { FC } from "react";

// internal imports
import AwardsProject from "../awards-project/awards-project.component";

//styles
import { FeaturedAwardsContainer } from "./featured-awards.styles";

// types
import { Project } from "../../utils/projects";
type FeaturedAwardsProps = {
  projects: Project[];
};

// component
const FeaturedAwards: FC<FeaturedAwardsProps> = ({ projects }) => {
  return (
    <>
      <FeaturedAwardsContainer>
        { projects.map((project) =>
          <AwardsProject project={ project } key={ project.id } />
        )}
      </FeaturedAwardsContainer>
    </>
  );
};

export default FeaturedAwards;