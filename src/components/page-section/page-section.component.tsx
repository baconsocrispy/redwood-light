import styled from "styled-components";
import { Heights } from "../../utils/theme.styles";

export const PageSection = styled.section`
  position: relative;
  scroll-margin-top: ${ Heights.navHeight };
  width: 100%;
  &:not(:first-child) {
    padding: 2rem 0;
  }
`;