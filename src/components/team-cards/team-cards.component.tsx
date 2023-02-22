// external imports
import { FC } from "react";

// internal imports
import TeamCard from "../team-card/team-card.component";

// styles
import { CardSectionContainer } from "../card-section/card-section.styles";

// types
import { Bio } from "../../utils/team";

type CardSectionProps = {
  bios: Bio[];
};

const CardSection: FC<CardSectionProps> = ({ bios }) => {
  return (
    <CardSectionContainer>
      { bios.map((bio) => (
        <TeamCard teamBio={ bio } key={ bio.id } />
      ))}
    </CardSectionContainer>
  );
};

export default CardSection;