import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const {colors, fonts, fontSizes, breakpoints} = ThemeStyles;

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
  font-size: ${fontSizes.mobileSectionHeader};
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.medium}) {
    font-size: ${fontSizes.sectionHeader }
  }
`

export const LogoContainer = styled.div`
  min-width: 8rem;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  @media (min-width: ${ breakpoints.medium}) {
    min-width: 12rem;
  }
`

export const Logo = styled.img`
  display: inline-block;
  width: 100%;
`