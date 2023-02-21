import styled from "styled-components";
import { fadeIn } from "../../utils/animations";
import ThemeStyles from "../../utils/theme.styles";

const { colors, fonts, breakpoints } = ThemeStyles;

export const FadeInHeaderContainer = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 2rem;
  left: 5rem;
  right: 5rem;

  @media (min-width: ${breakpoints.medium}) {
    bottom: 2rem;
    left: 5rem;
    right: 5rem;
  }
`;

export const FadeInH1 = styled.h1`
  opacity: .8;
  text-transform: uppercase;
  font-size: 4rem;
  font-family: ${fonts.secondary}, sans-serif;
  color: ${colors.white};
  animation: ${fadeIn} 3s ease-in-out;

  @media (min-width: ${breakpoints.medium}) {
    font-size: 10rem;
  }
`;
