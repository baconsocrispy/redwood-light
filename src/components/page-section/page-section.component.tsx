import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const { heights } = ThemeStyles;

export const PageSection = styled.section`
  position: relative;
  scroll-margin-top: ${heights.navHeight};
  width: 100%;
  &:not(:first-child) {
    padding: 2rem 0;
  }
`;