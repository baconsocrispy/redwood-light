import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const {colors, fonts, breakpoints} = ThemeStyles;

export const LogoDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: scroll;
  padding: 0 1rem;
`

export const LogoDisplayHeader = styled.h2`
  display: block;
  text-transform: uppercase;
  font-family: ${fonts.secondary};
  color: ${colors.black};
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
`

export const LogoContainer = styled.div`
  min-width: 10rem;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  @media (min-width: ${ breakpoints.medium}) {
    min-width: 15rem;
  }
`

export const Logo = styled.img`
  display: inline-block;
  width: 100%;
`