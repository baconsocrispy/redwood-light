import styled from "styled-components";
import { Link } from "react-router-dom";
import ThemeStyles from "../../utils/theme.styles";

const { colors, fonts, fontSizes } = ThemeStyles;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  background-color: ${ colors.redwoodRed };

  color: ${ colors.white  };
  font-size: ${ fontSizes.copy };
  font-family: ${ fonts.primary };
  text-align: center;
`

export const FooterList = styled.ul`
  list-style: none;
  margin: 2rem 0;
`

export const FooterItem = styled.li`
  padding: .5rem;
`

export const FooterLink = styled(Link)`
  cursor: pointer;
  display: block;
  transition: all .2s;

  &:link,
  &:visited {
    color: currentColor;
  }
`

export const FooterAnchor = styled.a`
  cursor: pointer;
  display: block;
  transition: all .2s;

  &:link,
  &:visited {
    color: currentColor;
  }
`

export const Copyright = styled.div`
  font-size: ${ fontSizes.mobileCopy };
  transform: skewX(-15deg);
  margin-bottom: 2rem;
`