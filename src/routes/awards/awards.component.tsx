// internal imports
import BackgroundImage from "../../components/background-image/background-image.component"
import { PageSection } from "../../components/page-section/page-section.component"
import TextSection from "../../components/text-section/text-section.component"
import FeaturedAwards from "../../components/featured-awards/featured-awards.component"

// assets
import { 
  AwardsBodyCopy, 
  AwardsHeaderCopy 
} from "../../components/text-section/copy/copy"
import { AwardsProjects, Schematics } from "../../utils/data-objects"
import { EmmyAward } from "../../utils/assets"

// styles
import { Emmy, EmmyContainer } from "./awards.styles"


// component
const Awards = () => {
  return (
    <PageSection>
      <EmmyContainer>
        <Emmy src={ EmmyAward} />
      </EmmyContainer>
      <TextSection 
        headerText={ AwardsHeaderCopy } 
        bodyText={ AwardsBodyCopy} 
      />
      <FeaturedAwards projects={ AwardsProjects } />
      <BackgroundImage image={ Schematics[0].image } />
    </PageSection>
  )
}

export default Awards