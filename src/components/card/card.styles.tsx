import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const { breakpoints, colors, fonts, fontSizes } = ThemeStyles;

export const CardContainer = styled.div`
  position: relative;
  align-items: center;
  height: 30rem;
  color: ${colors.black};
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 5rem;
  box-shadow: 2rem 2rem 10rem rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.4s;

  &:hover {
    filter: brightness(1.2);
    background-color: rgba(255, 255, 255, 0.7);
  }

  &:nth-child(odd) {
    margin-left: 5%;
  }

  &:nth-child(even) {
    margin-right: 5%;
    float: right;
  }

  @media (min-width: ${breakpoints.medium}) {
    width: 75rem;
  }
`;

export const CardHeader = styled.h3`
  position: absolute;
  top: 3rem;
  right: 3rem;
  color: ${colors.black};
  text-transform: uppercase;
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.subHeader};

  @media (min-width: ${breakpoints.medium}) {
  }
`

export const CardImageContainer = styled.figure`
  margin-top: 2.5rem;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 5%;
  float: left;
  shape-outside: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  transform: translateX(-2rem);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  transition: all .4s;
  filter: brightness(1);
`

export const CardDescription = styled.p`
  margin-top: 7rem;
  padding: 0 3rem;
  font-family: ${fonts.primary};
  font-size: ${fontSizes.mobileCopy};

  @media (min-width: ${breakpoints.medium}) {
    font-size: ${fontSizes.copy};
  }
`;
