import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const { colors, fonts, fontSizes } = ThemeStyles;

export const FeaturedProjectsContainer = styled.div`
  width: 95%;
  margin: auto;
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem 5rem;
  justify-content: space-evenly;
`

export const FeaturedHeader = styled.h2`
  width: 95%;
  text-align: center;
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.sectionHeader};
  color: ${colors.black};
  margin: 0 auto;
`