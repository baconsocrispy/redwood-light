import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, Fonts, FontSizes } from "../../utils/theme.styles";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  background-color: ${ Colors.redwoodRed };

  color: ${ Colors.white  };
  font-size: ${ FontSizes.copy };
  font-family: ${ Fonts.primary };
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
  font-size: ${ FontSizes.mobileCopy };
  transform: skewX(-15deg);
  margin-bottom: 2rem;
`