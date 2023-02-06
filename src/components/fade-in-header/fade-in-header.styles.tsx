import styled from "styled-components";
import { fadeIn } from "../../utils/animations";
import ThemeStyles from "../../utils/theme.styles";

const { colors, fonts } = ThemeStyles;

export const FadeInHeaderContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 5rem;
  z-index: 10;
`;

export const FadeInH1 = styled.h1`
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255,255,255,1) 100%);
  background-clip: text;
  opacity: .8;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-size: 10rem;
  font-family: ${fonts.secondary};
  color: ${colors.white};
  animation: ${fadeIn} 3s ease-in-out;
`;
