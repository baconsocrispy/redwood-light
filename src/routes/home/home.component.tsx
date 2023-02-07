// internal imports
import HeroSlideshow from "../../components/hero-slideshow/hero-slideshow.component";
import LogoDisplay from "../../components/logo-display/logo-display.component";
import { PageSection } from "../../components/page-section/page-section.component";
import TextSection from "../../components/text-section/text-section.component";

// images
import { HeroImages } from "../../utils/images";
import { ClientLogos } from "../../utils/logos";

// components
const Home = () => {
  return (
    <main>
      <PageSection>
        <HeroSlideshow images={HeroImages} timing={500} />
      </PageSection>
      <PageSection>
        <TextSection />
      </PageSection>
      <PageSection>
        <LogoDisplay logos={ClientLogos} />
      </PageSection>
    </main>
  );
};

export default Home;
