// external imports
import { useState, FC, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";
import { faRightLong, faLeftLong } from "@fortawesome/free-solid-svg-icons";

// styles
import {
  SlideshowArrowIcon,
  SlideshowButton,
  SlideshowButtonContainer,
  SlideshowContainer,
  SlideshowImage,
} from "./hero-slideshow.styles";

// types
import { Image } from "../../utils/images";
type HeroSlideshowProps = {
  images: Image[];
  timing: number;
};

// component
const HeroSlideshow: FC<HeroSlideshowProps> = ({ images, timing }) => {
  // state
  const [imageIndex, setImageIndex] = useState(0);
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  // side effects
  useEffect(() => {
    setInProp(true);
  }, [imageIndex]);

  // click handler
  const handleClick = (direction: string, timing: number) => {
    // set transition 'in' prop to false
    setInProp(false);
    // allow time for transition to take place
    setTimeout(() => {
      // set current image to next or previous based on direction
      const nextIndex = imageIndex + 1 === images.length ? 0 : imageIndex + 1;
      const prevIndex = imageIndex - 1 < 0 ? images.length - 1 : imageIndex - 1;
      setImageIndex(direction === "right" ? nextIndex : prevIndex);
    }, timing);
  };

  // component elements
  return (
    <SlideshowContainer>
      <Transition nodeRef={nodeRef} in={inProp} timeout={timing}>
        {(state) => (
          <SlideshowImage
            src={images[imageIndex].src}
            alt={images[imageIndex].alt}
            state={state}
            timing={timing}
            ref={nodeRef}
          />
        )}
      </Transition>

      <SlideshowButtonContainer>
        <SlideshowButton
          onClick={() => handleClick("left", timing)}
          name="rotate-slideshow-left"
        >
          <SlideshowArrowIcon title="left-long" icon={faLeftLong} />
        </SlideshowButton>
        <SlideshowButton
          onClick={() => handleClick("right", timing)}
          name="rotate-slideshow-left"
        >
          <SlideshowArrowIcon title="right-long" icon={faRightLong} />
        </SlideshowButton>
      </SlideshowButtonContainer>
    </SlideshowContainer>
  );
};

export default HeroSlideshow;
