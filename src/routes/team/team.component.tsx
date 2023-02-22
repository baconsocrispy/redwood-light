// internal imports
import BackgroundImage from "../../components/background-image/background-image.component"
import { PageSection } from "../../components/page-section/page-section.component"
import TeamCards from "../../components/team-cards/team-cards.component";
import { TeamSectionHeader } from "./team.styles";

// api
import { Schematics } from "../../utils/services";
import { TeamBios } from "../../utils/team";

const Team = () => {
  const bgImage2 = Schematics[1].image;

  return (
    <PageSection>
      <TeamSectionHeader>Our Team</TeamSectionHeader>
      <BackgroundImage image={ bgImage2 } />
      <TeamCards bios={ TeamBios }/>
    </PageSection>
  )
}

export default Team