import styled from "styled-components";
import { Link } from "react-router-dom";
import ThemeStyles from "../../utils/theme.styles";
const { breakpoints, fonts, colors, heights } = ThemeStyles

export const NavigationContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: ${ heights.navHeight };
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  padding: 0 2rem;
  background-color: ${ colors.white };
  font-family: ${ fonts.primary };
  box-shadow: 1rem 0 15rem rgba(0, 0, 0, 0.4);

  @media (min-width: ${ breakpoints.small }) {
    padding: 0 4rem;
  }
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  width: 15rem;

  @media (min-width: ${ breakpoints.medium }) {
    width: 20rem;
  }

  @media (min-width: ${ breakpoints.small }) {
    width: 20rem;
  }
`;

export const NavigationLogo = styled.img`
  width: 100%;
`;
