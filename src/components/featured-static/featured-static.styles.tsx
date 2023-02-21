import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";
import { slideInLeft } from "../../utils/animations";

const { colors, fonts, fontSizes, breakpoints } = ThemeStyles;

export const FeaturedProjectsContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem 5rem;
  justify-content: space-evenly;
  transition: all 0.7s ease-in-out;
  animation: ${slideInLeft} 0.7s ease-in-out;
`;

export const FeaturedHeader = styled.h2`
  width: 95%;
  text-align: center;
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.sectionHeader};
  color: ${colors.black};
  margin: 0 auto;
`;

export const SelectionBarContainer = styled.div`
  margin-top: 2rem;
  display: flex;

  @media (min-width: ${breakpoints.small}) {
    width: 95%;
    justify-content: space-evenly;
  }
`;

export const SelectionBarOption = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  padding: 1rem;
  border: none;
  flex: 1;

  &:nth-child(odd) {
    background-color: ${colors.redwoodRed};
    color: ${colors.white};
  }

  &:nth-child(even) {
    background-color: ${colors.white};
    color: ${colors.redwoodRed};
  }

  @media (min-width: ${breakpoints.small}) {
    flex: 0;
    white-space: nowrap;
  }
`;

export const TouchscreenAlert = styled.div`
  display: none;
  margin-top: 2rem;
  text-align: center;
  font-size: ${fontSizes.mobileCopy};
  color: ${colors.black};
  transform: skewX(-15deg);
  text-transform: uppercase;

  @media (hover: none) {
    display: block;
  }
`;
