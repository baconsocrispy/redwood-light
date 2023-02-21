import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const { colors, fonts, fontSizes } = ThemeStyles;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30rem;
  color: ${ colors.redwoodRed };
  text-align: center;
  font-family: ${ fonts.secondary };
  font-size: ${ fontSizes.sectionHeader };

  a:link,
  a:visited {
    color: currentColor;
    text-decoration: underline;
    font-style: italic;
    font-size: ${ fontSizes.copy };

    &:hover {
      background-color: rgba(0, 0, 0, .2);
    }
  }
`