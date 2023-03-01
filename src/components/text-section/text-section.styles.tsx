import styled from "styled-components";
import { 
  Colors, 
  Fonts, 
  FontSizes, 
  Breakpoints 
} from "../../utils/theme.styles";

export const TextSectionContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 6rem auto;
  text-align: center;
  background: transparent;


  @media (min-width: ${ Breakpoints.medium }) {
    width: 65%;
  }
`

export const TextSectionHeader = styled.h2`
  font-family: ${ Fonts.secondary };
  color: ${ Colors.black };
  font-size: ${ FontSizes.mobileSectionHeader };
  text-transform: uppercase;
  margin-bottom: 2rem;

  @media (min-width: ${ Breakpoints.medium }) {
    font-size: ${ FontSizes.sectionHeader };
  }
`

export const TextSectionParagraph = styled.p`
  font-family: ${ Fonts.primary };
  font-size: ${ FontSizes.mobileCopy };

  @media (min-width: ${ Breakpoints.medium }) {
    font-size: ${ FontSizes.copy };
  }
`