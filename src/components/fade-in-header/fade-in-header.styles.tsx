import styled from "styled-components";
import { fadeIn } from "../../utils/animations";
import { 
  Colors, 
  Fonts, 
  Breakpoints 
} from "../../utils/theme.styles";

export const FadeInHeaderContainer = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 2rem;
  left: 5rem;
  right: 5rem;

  @media (min-width: ${ Breakpoints.medium }) {
    bottom: 2rem;
    left: 5rem;
    right: 5rem;
  }
`;

export const FadeInH1 = styled.h1`
  opacity: .8;
  text-transform: uppercase;
  font-size: 4rem;
  font-family: ${ Fonts.secondary }, sans-serif;
  color: ${ Colors.white };
  animation: ${ fadeIn } 3s ease-in-out;

  @media (min-width: ${ Breakpoints.medium }) {
    font-size: 10rem;
  }
`;
