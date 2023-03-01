import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const {colors, fonts, fontSizes, breakpoints} = ThemeStyles;

export const LogoDisplayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 7.5rem);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 2rem;
  align-items: center;
  justify-content: center;

  width: auto;
  margin-top: 3rem;

  @media (min-width: ${ breakpoints.xsmall }) {
    grid-template-columns: repeat(3, 10rem);
  }
`;

export const LogoDisplayHeader = styled.h2`
  display: block;
  text-transform: uppercase;
  font-family: ${fonts.secondary};
  color: ${colors.black};
  font-size: ${fontSizes.sectionHeader};
  text-align: center;
  margin-bottom: 1rem;
`

export const LogoContainer = styled.div`
  width: 100%;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`

export const Logo = styled.img`
  /* display: inline-block; */
  width: 100%;
`