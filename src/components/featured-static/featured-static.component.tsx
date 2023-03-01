// external imports
import { FC } from "react";

// internal imports
import FeaturedProject from "../project/project.component";

//styles
import {
  FeaturedHeader,
  FeaturedProjectsContainer,
  TouchscreenAlert
} from "./featured-static.styles";

// types
import { Project } from "../../utils/projects";
type FeaturedSectionProps = {
  projects: Project[];
};

// component
const FeaturedSection: FC<FeaturedSectionProps> = ({ projects }) => {
  return (
    <>
      <FeaturedHeader>Featured Projects</FeaturedHeader>

      <TouchscreenAlert>Tap on a project to learn more</TouchscreenAlert>

      <FeaturedProjectsContainer>
        {projects.map((project) =>
          <FeaturedProject project={ project } key={ project.id } />
        )}
      </FeaturedProjectsContainer>

      <FeaturedHeader>Our Clients</FeaturedHeader>
    </>
  );
};

export default FeaturedSection;
