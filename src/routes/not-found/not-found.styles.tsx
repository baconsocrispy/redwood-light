import styled from "styled-components";
import { Colors, Fonts, FontSizes } from "../../utils/theme.styles";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30rem;
  color: ${ Colors.redwoodRed };
  text-align: center;
  font-family: ${ Fonts.secondary };
  font-size: ${ FontSizes.sectionHeader };

  a:link,
  a:visited {
    color: currentColor;
    text-decoration: underline;
    font-style: italic;
    font-size: ${ FontSizes.copy };

    &:hover {
      background-color: rgba(0, 0, 0, .2);
    }
  }
`