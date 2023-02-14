import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";
import { slideInLeft } from "../../utils/animations";

const { colors, fonts, fontSizes } = ThemeStyles;

export const FeaturedProjectsContainer = styled.div`
  width: 95%;
  margin: auto;
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem 5rem;
  justify-content: space-evenly;
  transition: all .7s ease-in-out;
  animation: ${slideInLeft} .7s ease-in-out;
`

export const FeaturedHeader = styled.h2`
  width: 95%;
  text-align: center;
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.sectionHeader};
  color: ${colors.black};
  margin: 0 auto;
`

export const SelectionBarContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

export const SelectionBarOption = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  padding: 1rem;
`;