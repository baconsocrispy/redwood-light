import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const { colors, fonts, fontSizes, breakpoints } = ThemeStyles;

export const TextSectionContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
  text-align: center;

  @media (min-width: ${breakpoints.medium}) {
    width: 65%;
  }
`

export const TextSectionHeader = styled.h2`
  font-family: ${fonts.secondary};
  color: ${colors.black};
  font-size: ${fontSizes.mobileSectionHeader};
  text-transform: uppercase;
  margin-bottom: 2rem;

  @media (min-width: ${breakpoints.medium}) {
    font-size: ${fontSizes.sectionHeader};
  }
`

export const TextSectionParagraph = styled.p`
  font-family: ${fonts.primary};
  font-size: ${fontSizes.mobileCopy};

  @media (min-width: ${breakpoints.medium}) {
    font-size: ${fontSizes.copy};
  }
`