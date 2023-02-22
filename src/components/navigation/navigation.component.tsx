// external imports
import { useNavigate } from "react-router-dom";

// internal imports
import { Outlet } from "react-router-dom";
import RedwoodLogo from "../../assets/images/logo.v1.png";
import HamburgerMenu from "../hamburger/hamburger.component";

// styles
import {
  NavigationLogo,
  LogoContainer,
  NavigationContainer,
} from "./navigation.styles";

// component
const Navigation = () => {
  const menuItems = ['Awards', 'Team', 'Contact'];
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
        <HamburgerMenu menuItems={ menuItems } />
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
