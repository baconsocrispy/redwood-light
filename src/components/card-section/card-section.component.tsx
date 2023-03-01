// external imports
import { FC } from "react";

// internal imports
import Card from "../card/card.component";

// styles
import { CardSectionContainer } from "./card-section.styles";

// types
import { Service } from "../../utils/data-objects";
type CardSectionProps = {
  services: Service[];
};

const CardSection: FC<CardSectionProps> = ({ services }) => {
  return (
    <CardSectionContainer>
      {services.map((service, index) => (
        <Card service={ service } key={ index } />
      ))}
    </CardSectionContainer>
  );
};

export default CardSection;
