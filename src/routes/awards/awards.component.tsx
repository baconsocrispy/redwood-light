// internal imports
import { PageSection } from "../../components/page-section/page-section.component"
import TextSection from "../../components/text-section/text-section.component"

// assets
import { 
  AwardsBodyCopy, 
  AwardsHeaderCopy 
} from "../../components/text-section/copy/copy"

// component
const Awards = () => {
  return (
    <PageSection>
      <TextSection 
        headerText={ AwardsHeaderCopy } 
        bodyText={ AwardsBodyCopy} 
      />
    </PageSection>
  )
}

export default Awards