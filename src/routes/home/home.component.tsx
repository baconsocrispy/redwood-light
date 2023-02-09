// internal imports
import CardSection from "../../components/card-section/card-section.component";
import HeroSlideshow from "../../components/hero-slideshow/hero-slideshow.component";
import LogoDisplay from "../../components/logo-display/logo-display.component";
import { PageSection } from "../../components/page-section/page-section.component";
import TextSection from "../../components/text-section/text-section.component";

// api
import { HeroImages } from "../../utils/images";
import { ClientLogos } from "../../utils/logos";
import { Services, Schematic } from "../../utils/services";

// internal imports
import BackgroundImage from "../../components/background-image/background-image.component";


// components
const Home = () => {
  const bgImage = Schematic.image;

  return (
    <main>
      <PageSection>
        <HeroSlideshow images={HeroImages} timing={500} />
      </PageSection>
      <PageSection>
        <BackgroundImage image={bgImage} />
        <TextSection />
        <CardSection services={Services} />
      </PageSection>
      <PageSection>
        <LogoDisplay logos={ClientLogos} />
      </PageSection>
    </main>
  );
};

export default Home;
