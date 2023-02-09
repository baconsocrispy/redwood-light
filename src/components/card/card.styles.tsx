import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const { breakpoints, colors, fonts, fontSizes } = ThemeStyles;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  height: 30rem;
  color: ${colors.black};
  background-color: ${colors.white};
  margin-bottom: 2rem;
  box-shadow: 2rem 2rem 10rem rgba(0, 0, 0, .3);
  border-radius: 5px;
  overflow: hidden;

  &:nth-child(odd) {
    margin-left: 5%;
  }

  &:nth-child(even) {
    margin-right: 0;
  }

  @media (min-width: ${breakpoints.medium}) {
    width: 75rem;
  }
`;

export const CardHeader = styled.h3`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: ${colors.white};
  text-transform: uppercase;
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.subHeader};

  @media (min-width: ${breakpoints.medium}) {
  }
`

export const CardImageContainer = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardDescriptionContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export const CardDescription = styled.p`
  font-family: ${fonts.primary};
  font-size: ${fontSizes.mobileCopy};
  text-align: center;

  @media (min-width: ${breakpoints.medium}) {
    font-size: ${fontSizes.copy};
  }
`;
