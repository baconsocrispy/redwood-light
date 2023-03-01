import styled from "styled-components";
import { 
  Breakpoints, 
  Fonts, 
  Colors, 
  Heights 
} from "../../utils/theme.styles";

export const NavigationContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: ${ Heights.navHeight };
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  padding: 0 2rem;
  background-color: ${ Colors.white };
  font-family: ${ Fonts.primary };
  box-shadow: 1rem 0 15rem rgba(0, 0, 0, 0.4);

  @media (min-width: ${ Breakpoints.small }) {
    padding: 0 4rem;
  }
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  width: 15rem;

  @media (min-width: ${ Breakpoints.medium }) {
    width: 20rem;
  }

  @media (min-width: ${ Breakpoints.small }) {
    width: 20rem;
  }
`;

export const NavigationLogo = styled.img`
  width: 100%;
`;
