// internal imports
import HeroSlideshow from "../../components/hero-slideshow/hero-slideshow.component";
import { PageSection } from "../../components/page-section/page-section.component";

// images
import { HeroImages } from "../../utils/images";

// components
const Home = () => {
  return (
    <PageSection>
      <HeroSlideshow images={HeroImages} timing={500} />
    </PageSection>
  );
};

export default Home;
