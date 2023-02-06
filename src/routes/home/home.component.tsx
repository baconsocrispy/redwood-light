// internal imports
import AnimatedHeader from "../../components/fade-in-header/fade-in-header.component";
import HeroSlideshow from "../../components/hero-slideshow/hero-slideshow.component";
import { PageSection } from "../../components/page-section/page-section.component";

// images
import { HeroImages } from "../../utils/images";

// components
const Home = () => {
  const headerContent = "bring your best moments to light";

  return (
    <main>
      <PageSection>
        <AnimatedHeader content={headerContent}></AnimatedHeader>
        <HeroSlideshow images={HeroImages} timing={500} />
      </PageSection>
    </main>
  );
};

export default Home;
