import styled from "styled-components";
import { 
  Fonts, 
  Colors, 
  FontSizes, 
  Breakpoints 
} from "../../utils/theme.styles";

export const TeamSectionHeader = styled.h2`
  font-family: ${ Fonts.secondary };
  color: ${ Colors.black };
  font-size: ${ FontSizes.mobileSectionHeader };
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 2rem;

  @media (min-width: ${ Breakpoints.medium }) {
    font-size: ${ FontSizes.sectionHeader };
  }
`