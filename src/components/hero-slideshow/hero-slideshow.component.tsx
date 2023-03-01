// external imports
import { useState, FC } from "react";
import { faRightLong, faLeftLong } from "@fortawesome/free-solid-svg-icons";

// internal imports
import FadeInHeader from "../fade-in-header/fade-in-header.component";

// styles
import {
  SlideshowArrowIcon,
  SlideshowButton,
  SlideshowButtonContainer,
  SlideshowContainer,
  SlideshowImage,
  SlideshowImageContainer,
} from "./hero-slideshow.styles";

// types
import { Image } from "../../utils/data-objects";
type HeroSlideshowProps = {
  images: Image[];
};

// component
const HeroSlideshow: FC<HeroSlideshowProps> = ({ images }) => {
  // state
  const [ activeIndex, setActiveIndex ] = useState(0);
  const headerContent = "bring your best moments to light";

  // click handlers
  const rotatePrevious = () => {
    const prevIndex = activeIndex === 0 ? 
      images.length - 1 : activeIndex - 1; 
    setActiveIndex(prevIndex);
  }

  const rotateNext = () => {
    const nextIndex = activeIndex === images.length - 1 ? 
      0 : activeIndex + 1; 
    setActiveIndex(nextIndex);
  }

  return (
    <SlideshowContainer>
      {activeIndex === 0 && <FadeInHeader content={headerContent} />}

      <SlideshowImageContainer>
        { images.map((image, index) => (
          <SlideshowImage
            key={ image.id }
            src={ image.src }
            alt={ image.alt }
            style={ index === activeIndex ? 
              { opacity: '1' } : { opacity: '0' }
            }
          />
        ))}
      </SlideshowImageContainer>
 
      <SlideshowButtonContainer>
        <SlideshowButton
          onClick={ rotatePrevious }
          name="rotate-slideshow-left"
        >
          <SlideshowArrowIcon title="left-long" icon={ faLeftLong } />
        </SlideshowButton>
        <SlideshowButton
          onClick={ rotateNext }
          name="rotate-slideshow-left"
        >
          <SlideshowArrowIcon title="right-long" icon={ faRightLong } />
        </SlideshowButton>
      </SlideshowButtonContainer>
    </SlideshowContainer>

  );
};

export default HeroSlideshow;
