// external imports
import { FC } from "react";

// types
import { Service } from "../../utils/data-objects";
import {
  CardButton,
  CardContainer,
  CardDescription,
  CardHeader,
  CardImage,
  CardImageContainer,
} from "./card.styles";
type CardProps = {
  service: Service;
};

const Card: FC<CardProps> = ({ service }) => {
  const { title, image, description } = service;

  const handleClick = () => {
    const featured = document.getElementById("featured");
    featured?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <CardContainer>
      <CardHeader className="card-header">{title}</CardHeader>
      <CardImageContainer className="card-image-container">
        <CardImage src={image.src} alt={image.alt} className="card-image" />
      </CardImageContainer>
      <CardDescription className="description">{description}</CardDescription>
      <CardButton onClick={handleClick}>Featured Projects</CardButton>
    </CardContainer>
  );
};

export default Card;
