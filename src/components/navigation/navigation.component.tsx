import { LogoContainer, NavigationContainer, NavigationLink, NavigationLinksContainer } from "./navigation.styles";

const Navigation = () => {
  return (
    <NavigationContainer>
      <LogoContainer>
        <img className="logo" alt="Redwood Lighting Main Logo" />
      </LogoContainer>
      <NavigationLinksContainer className="nav-links-container">
        <NavigationLink className="nav-link" to="/">
          Team
        </NavigationLink>
        <NavigationLink className="nav-link" to="/">
          Awards
        </NavigationLink>
        <NavigationLink className="nav-link" to="/">
          Contact
        </NavigationLink>
      </NavigationLinksContainer>
    </NavigationContainer>
  );
};

export default Navigation;
