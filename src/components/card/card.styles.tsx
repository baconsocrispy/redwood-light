import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const { breakpoints, colors, fonts, fontSizes } = ThemeStyles;

export const CardContainer = styled.div`
  width: 100%;
  color: ${colors.black};

  @media (min-width: ${breakpoints.medium}) {
    width: 25%;
  }
`

export const CardHeader = styled.h3`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.subHeader};
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.medium}) {
  }
`

export const CardImageContainer = styled.div`
  width: 100%;
`

export const CardImage = styled.img`
  width: 100%;
  height: 23rem;
  object-fit: cover;
`

export const CardDescriptionContainer = styled.div`
  
`

export const CardDescription = styled.p`
  font-family: ${fonts.primary};
  font-size: ${fontSizes.mobileCopy};
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 90%;

  @media (min-width: ${breakpoints.medium}) {
    font-size: ${fontSizes.copy};
  }
`;
