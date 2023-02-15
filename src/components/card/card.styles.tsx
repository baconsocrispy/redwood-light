import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const { breakpoints, colors, fonts, fontSizes } = ThemeStyles;

export const CardContainer = styled.div`
  position: relative;

  margin-bottom: 5rem;
  padding-bottom: 3rem;

  color: ${colors.black};
  
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 2rem 2rem 10rem rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;

  transition: all 0.4s;

  &:hover {
    filter: brightness(1.2);
    background-color: rgba(255, 255, 255, 0.7);
  }

  &:nth-child(odd) {

    @media (min-width: ${breakpoints.large}) {
      margin-left: 5%;
    }
  }

  &:nth-child(even) {
    @media (min-width: ${breakpoints.large}) {
      margin-right: 5%;
      float: right;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    width: 75rem;
    height: 30rem;
  }
`;

export const CardHeader = styled.h3`
  margin-top: 1rem;
  margin-left: 1rem;
  color: ${colors.black};
  text-transform: uppercase;
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.subHeader};

  @media (min-width: ${breakpoints.medium}) {
    position: absolute;
    top: 3rem;
    right: 3rem;
  }
`

export const CardImageContainer = styled.figure`
  margin-top: 2.5rem;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 5%;
  float: left;
  shape-outside: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  transform: translateX(-2rem);

  @media (min-width: ${breakpoints.medium}) {
    width: 25rem;
    height: 25rem;
  }
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
  margin-top: 3rem;
  padding: 0 3rem;
  font-family: ${fonts.primary};
  font-size: ${fontSizes.mobileCopy};

  @media (min-width: ${breakpoints.medium}) {
    font-size: ${fontSizes.copy};
    margin-top: 7rem;
  }
`;

export const CardButton = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
  right: 4rem;
  padding-bottom: .5rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${colors.redwoodRed};
  color: ${colors.redwoodRed};
  font-family: ${fonts.secondary};
  text-transform: uppercase;

  &:hover {
    background-color: rgba(0, 0, 0, .2);
  }

  @media (min-width: ${breakpoints.medium}) {
    position: absolute;
    bottom: 2rem;
    right: 4rem;
    padding-bottom: .5rem;
  }
`
