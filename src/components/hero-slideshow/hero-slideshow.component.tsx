// external imports
import { useState, FC } from "react";
import { Transition } from "react-transition-group";
import { faRightLong, faLeftLong } from "@fortawesome/free-solid-svg-icons";

// internal imports

// styles
import {
  SlideshowButton,
  SlideshowButtonContainer,
  SlideshowContainer,
  SlideshowImage,
  SlideshowImageContainer,
} from "./hero-slideshow.styles";

// types
import { Image } from "../../utils/images";
type HeroSlideshowProps = {
  images: Image[];
};

// component
const HeroSlideshow: FC<HeroSlideshowProps> = ({ images }) => {
  // state
  const [imageIndex, setImageIndex] = useState(0);
  const [ fade, setFade ] = useState(true)

  // click handlers
  const handleNextClick = () => {
    const nextIndex = imageIndex + 1 === images.length ? 0 : imageIndex + 1;
    setFade(false)
    setImageIndex(nextIndex);
  };

  const handleBackClick = () => {
    const prevIndex = imageIndex - 1 < 0 ? images.length - 1 : imageIndex - 1;
    setImageIndex(prevIndex);
  };

  return (
    <SlideshowContainer>
      <SlideshowImageContainer>
        <Transition in={fade} timeout={500}>
          {(state) => {
            console.log(state)
            return(<SlideshowImage
              state={state}
              src={images[imageIndex].url}
              alt={images[imageIndex].alt}
            />)
          }}
        </Transition>
      </SlideshowImageContainer>

      <SlideshowButtonContainer>
        <SlideshowButton icon={faLeftLong} onClick={handleNextClick} />
        <SlideshowButton icon={faRightLong} onClick={handleBackClick} />
      </SlideshowButtonContainer>
    </SlideshowContainer>
  );
};

export default HeroSlideshow;
