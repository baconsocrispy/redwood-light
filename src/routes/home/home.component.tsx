import HeroSlideshow from "../../components/hero-slideshow/hero-slideshow.component";

// images
import { HeroImages } from "../../utils/images";

const Home = () => {
  return (
    <HeroSlideshow images={ HeroImages } />
  );
};

export default Home;
