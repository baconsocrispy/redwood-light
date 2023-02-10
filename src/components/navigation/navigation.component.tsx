// external imports
import { useNavigate } from "react-router-dom";

// internal imports
import { Outlet } from "react-router-dom";
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
  // navigation
  const navigate = useNavigate();

  return (
    <>
      <NavigationContainer>
        <LogoContainer>
          <NavigationLogo
            src={RedwoodLogo}
            alt="Redwood Lighting Main Logo"
            onClick={() => navigate("/")}
          />
        </LogoContainer>
        <NavigationLinksContainer>
          <NavigationLink to="team">Team</NavigationLink>
          <NavigationLink to="awards">Awards</NavigationLink>
          <NavigationLink to="contact">Contact</NavigationLink>
        </NavigationLinksContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
