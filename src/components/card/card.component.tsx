// external imports
import { FC } from "react";

// types
import { Service } from "../../utils/services";
import { CardContainer, CardDescription, CardDescriptionContainer, CardHeader, CardImage, CardImageContainer } from "./card.styles";
type CardProps = {
  service: Service;
}

const Card: FC<CardProps> = ({ service }) => {
  const {title, image, description } = service

  return (
    <CardContainer>
      <CardHeader className="card-header">{title}</CardHeader>
      <CardImageContainer className="card-image-container">
        <CardImage src={image.src} alt={image.alt} className="card-image" />
      </CardImageContainer>
      <CardDescriptionContainer className="description-container">
        <CardDescription className="description">{description}</CardDescription>
      </CardDescriptionContainer>
    </CardContainer>
  );
};

export default Card;
