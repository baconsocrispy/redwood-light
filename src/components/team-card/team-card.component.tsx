// external imports
import { FC } from "react";

// types
import { Bio } from "../../utils/data-objects";

// styles
import {
  CardImage,
  CardImageContainer,
} from "../card/card.styles";
import { 
  TeamCardContainer, 
  TeamCardDescription,
  TeamCardHeader, 
  TeamCardSubHeader 
} from "./team-card.styles";


type CardProps = {
  teamBio: Bio;
};

const TeamCard: FC<CardProps> = ({ teamBio }) => {
  const { name, image, position, bio } = teamBio;

  return (
    <TeamCardContainer>
      <TeamCardHeader className="card-header">
        { name }
      </TeamCardHeader>
      <TeamCardSubHeader>{ position }</TeamCardSubHeader>
      <CardImageContainer className="card-image-container">
        <CardImage src={image.src} alt={image.alt} className="card-image" />
      </CardImageContainer>
      <TeamCardDescription className="description">{ bio }</TeamCardDescription>
    </TeamCardContainer>
  );
};

export default TeamCard;
