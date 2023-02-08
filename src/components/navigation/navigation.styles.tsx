// external imports
import styled from "styled-components";
import { Link } from "react-router-dom";

// styles
import ThemeStyles from "../../utils/theme.styles";
const { breakpoints, fonts, colors, heights } = ThemeStyles

export const NavigationContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: ${heights.navHeight};
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  padding: 0 1%;
  background-color: ${colors.white};
  font-family: ${fonts.primary};
  box-shadow: 1rem 0 15rem rgba(0, 0, 0, 0.4);

  @media (min-width: ${breakpoints.medium}) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 25rem;
  padding: 3%;

  @media (min-width: ${breakpoints.medium}) {
    width: 25rem;
  }
`;

export const NavigationLogo = styled.img`
  max-width: 100%;
`;

export const NavigationLinksContainer = styled.div`
  display: none;
  height: 100%;
  margin-right: 1rem;

  @media (min-width: ${breakpoints.medium}) {
    display: flex;
  }
`;

export const NavigationLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0% 2%;
  color: ${colors.black};
  font-size: 1.5rem;
`;
