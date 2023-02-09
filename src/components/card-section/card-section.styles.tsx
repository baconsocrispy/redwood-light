import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";
const { breakpoints } = ThemeStyles;


export const CardSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.medium}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;