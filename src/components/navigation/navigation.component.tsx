// internal imports
import RedwoodLogo from "../../assets/images/logo.v1.png";

// styles
import {
  NavigationLogo,
  LogoContainer,
  NavigationContainer,
  NavigationLink,
  NavigationLinksContainer,
} from "./navigation.styles";

// component
const Navigation = () => {
  return (
    <NavigationContainer>
      <LogoContainer>
        <NavigationLogo src={RedwoodLogo} alt="Redwood Lighting Main Logo" />
      </LogoContainer>
      <NavigationLinksContainer>
        <NavigationLink to="team">Team</NavigationLink>
        <NavigationLink to="awards">Awards</NavigationLink>
        <NavigationLink to="contact">Contact</NavigationLink>
      </NavigationLinksContainer>
    </NavigationContainer>
  );
};

export default Navigation;
