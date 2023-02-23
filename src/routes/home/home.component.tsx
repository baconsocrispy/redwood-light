// internal imports
import CardSection from "../../components/card-section/card-section.component";
import HeroSlideshow from "../../components/hero-slideshow/hero-slideshow.component";
import LogoDisplay from "../../components/logo-display/logo-display.component";
import { PageSection } from "../../components/page-section/page-section.component";
import TextSection from "../../components/text-section/text-section.component";

// api
import { HeroImages } from "../../utils/images";
import { ClientLogos } from "../../utils/logos";
import { Services, Schematics } from "../../utils/services";
import { Projects } from "../../utils/projects";

// internal imports
import BackgroundImage from "../../components/background-image/background-image.component";
import { ContactButton } from "../../components/contact-button/contact-button.component";
import FeaturedSection from "../../components/featured-static/featured-static.component";

// styles
import { FooterLink } from "../../components/footer/footer.styles";

// components
const Home = () => {
  const bgImage1 = Schematics[0].image;
  const bgImage2 = Schematics[1].image;

  return (
    <main>
      <PageSection id='home'>
        <HeroSlideshow images={ HeroImages } />
        <ContactButton>
          <FooterLink to="/contact">Contact Us</FooterLink>
        </ContactButton>
      </PageSection>
      <PageSection id="services">
        <BackgroundImage image={ bgImage1 } />
        <TextSection />
        <CardSection services={ Services } />
      </PageSection>
      <PageSection id="featured">
        <BackgroundImage image={ bgImage2 } />
        <FeaturedSection projects={ Projects } />
        <LogoDisplay logos={ ClientLogos } />
      </PageSection>
    </main>
  );
};

export default Home;
