// external imports
import { FC } from "react";

// internal imports
import FeaturedProject from "../project/project.component";
import SelectionBar from "../selection-bar/selection-bar.component";

//styles
import {
  FeaturedHeader,
  FeaturedProjectsContainer,
} from "./featured-section.styles";

// types/enums
import { Project } from "../../utils/projects";
type FeaturedSectionProps = {
  projects: Project[];
};

export enum SERVICE_TYPES {
  BROADCAST = "broadcast",
  CORPORATE = "corporate",
  LIVE_EVENT = "live event",
}

const FeaturedSection: FC<FeaturedSectionProps> = ({ projects }) => {

  return (
    <>
      <FeaturedHeader>Featured Projects</FeaturedHeader>
      <SelectionBar options={Object.values(SERVICE_TYPES)} />
      <FeaturedProjectsContainer>
        {projects.map((project, index) => (
          <FeaturedProject project={project} key={index} />
        ))}
      </FeaturedProjectsContainer>
      <FeaturedHeader>Our Clients</FeaturedHeader>
    </>
  );
};

export default FeaturedSection;
