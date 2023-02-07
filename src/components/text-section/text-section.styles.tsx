import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const { colors, fonts } = ThemeStyles;

export const TextSectionContainer = styled.div`
  width: 65%;
  margin: 2rem auto;
  text-align: center;
`

export const TextSectionHeader = styled.h2`
  font-family: ${fonts.secondary};
  color: ${colors.black};
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`

export const TextSectionParagraph = styled.p`
  font-family: ${fonts.primary};
  font-size: 2rem;
`