// external imports
import { FC } from "react";

// styles
import {
  BackgroundContent,
  BackgroundImageContainer,
} from "./background-image.styles";

// types
import { Image } from "../../utils/data-objects";
type BackgroundImageProps = {
  image: Image;
};

// component
const BackgroundImage: FC<BackgroundImageProps> = ({image}) => {
  return (
    <BackgroundImageContainer>
      <BackgroundContent src={image.src} alt={image.alt} />
    </BackgroundImageContainer>
  );
};

export default BackgroundImage;
