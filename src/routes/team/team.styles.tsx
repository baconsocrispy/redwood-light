import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const { fonts, colors, fontSizes, breakpoints } = ThemeStyles;

export const TeamSectionHeader = styled.h2`
  font-family: ${ fonts.secondary };
  color: ${ colors.black };
  font-size: ${ fontSizes.mobileSectionHeader };
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 2rem;

  @media (min-width: ${ breakpoints.medium }) {
    font-size: ${ fontSizes.sectionHeader };
  }
`