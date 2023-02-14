// external imports
import { FC, useEffect, useState } from "react";

// internal imports
import FeaturedProject from "../project/project.component";

//styles
import {
  FeaturedHeader,
  FeaturedProjectsContainer,
  SelectionBarContainer,
  SelectionBarOption,
} from "./featured-section.styles";

// types
import { Project } from "../../utils/projects";
type FeaturedSectionProps = {
  projects: Project[];
};

// enums
export enum SERVICE_TYPES {
  BROADCAST = "broadcast",
  CORPORATE = "corporate",
  LIVE_EVENT = "live event",
}

// component
const FeaturedSection: FC<FeaturedSectionProps> = ({ projects }) => {
  // state
  const [selected, setSelected] = useState(SERVICE_TYPES.BROADCAST);
  const [animate, setAnimate ] = useState(false)
  

  // click handler
  const changeProjectCategory = (category: SERVICE_TYPES) => 
     setSelected(category);

  return (
    <>
      <FeaturedHeader>Featured Projects</FeaturedHeader>

      <SelectionBarContainer>
        {Object.values(SERVICE_TYPES).map((option, index) => {
          return (
            <SelectionBarOption
              key={index}
              onClick={() => changeProjectCategory(option)}
            >
              {option}
            </SelectionBarOption>
          );
        })}
      </SelectionBarContainer>

      <FeaturedProjectsContainer key={selected}>
        {projects.map(
          (project, index) =>
            project.category === selected && (
              <FeaturedProject project={project} key={index} />
            )
        )}
      </FeaturedProjectsContainer>

      <FeaturedHeader>Our Clients</FeaturedHeader>
    </>
  );
};

export default FeaturedSection;
