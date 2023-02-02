// external imports
import styled from "styled-components";
import { Link } from "react-router-dom";

// internal imports
import ThemeStyles from "../../utils/theme.styles";

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1%;
  font-family: ${ThemeStyles.fonts.primary};

  @media (min-width: ${ThemeStyles.breakpoints.medium}) {
    height: 4em;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 250px;
  padding: 3%;

  @media (min-width: ${ThemeStyles.breakpoints.medium}) {
    width: 250px;
  }
`;

export const NavigationLogo = styled.img`
  max-width: 100%;
`;

export const NavigationLinksContainer = styled.div`
  display: none;
  height: 100%;
  margin-right: 1em;

  @media (min-width: ${ThemeStyles.breakpoints.medium}) {
    display: flex;
  }
`;

export const NavigationLink = styled(Link)`
  height: 100%;
  display: flex;
  padding: 0% 2%;
  align-items: center;
`;
