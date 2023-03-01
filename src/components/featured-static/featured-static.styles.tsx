import styled from "styled-components";
import { 
  Colors, 
  Fonts, 
  FontSizes, 
  Breakpoints 
} from "../../utils/theme.styles";

export const FeaturedProjectsContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem 5rem;
  justify-content: space-evenly;
  transition: all 0.7s ease-in-out;
`;

export const FeaturedHeader = styled.h2`
  width: 95%;
  text-align: center;
  text-transform: uppercase;
  font-family: ${ Fonts.secondary };
  font-size: ${ FontSizes.sectionHeader };
  color: ${ Colors.black };
  margin: 0 auto;
`;

export const SelectionBarContainer = styled.div`
  margin-top: 2rem;
  display: flex;

  @media (min-width: ${ Breakpoints.small }) {
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
    background-color: ${ Colors.redwoodRed };
    color: ${ Colors.white };
  }

  &:nth-child(even) {
    background-color: ${ Colors.white };
    color: ${ Colors.redwoodRed };
  }

  @media (min-width: ${ Breakpoints.small }) {
    flex: 0;
    white-space: nowrap;
  }
`;

export const TouchscreenAlert = styled.div`
  display: none;
  margin-top: 2rem;
  text-align: center;
  font-size: ${ FontSizes.mobileCopy };
  color: ${ Colors.black };
  transform: skewX(-15deg);
  text-transform: uppercase;

  @media (hover: none) {
    display: block;
  }
`;
