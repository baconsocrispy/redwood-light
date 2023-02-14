import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const { colors, fonts, fontSizes } = ThemeStyles;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  background-color: ${colors.redwoodRed};

  color: ${colors.white};
  font-size: ${fontSizes.copy};
  font-family: ${fonts.primary};
  text-align: center;
`

export const FooterList = styled.ul`
  list-style: none;
  margin: 2rem 0;
`

export const FooterItem = styled.li`
  padding: .5rem;
`

export const FooterLink = styled.a`
  cursor: pointer;
  display: block;
  transition: all .2s;

  &:link,
  &:visited {
    color: currentColor;
  }

  &:hover,
  &:active {
    transform: skewX(-15deg);
  }
`

export const Copyright = styled.div`
  transform: skewX(-15deg);
  margin-bottom: 2rem;
`