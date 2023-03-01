// internal imports
import { PageSection } from "../../components/page-section/page-section.component"
import TextSection from "../../components/text-section/text-section.component"
import FeaturedAwards from "../../components/featured-awards/featured-awards.component"

// assets
import { 
  AwardsBodyCopy, 
  AwardsHeaderCopy 
} from "../../components/text-section/copy/copy"
import { AwardsProjects } from "../../utils/projects"
import { Schematics } from "../../utils/services"
import BackgroundImage from "../../components/background-image/background-image.component"

// component
const Awards = () => {
  return (
    <PageSection>
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