// external imports
import styled from "styled-components";
import { Link } from "react-router-dom";

// internal imports
import ThemeStyles from "../../utils/theme.styles";

// styles
const { breakpoints, fonts, colors } = ThemeStyles

export const NavigationContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1%;
  font-family: ${fonts.primary};

  @media (min-width: ${breakpoints.medium}) {
    height: 7rem;
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
