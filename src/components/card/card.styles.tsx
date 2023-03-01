import styled from "styled-components";
import { 
  Breakpoints, 
  Colors, 
  Fonts, 
  FontSizes 
} from "../../utils/theme.styles";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction:column;
  align-items: center;
  
  margin-bottom: 5rem;
  padding-bottom: 3rem;

  color: ${ Colors.black };
  
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
    @media (min-width: ${ Breakpoints.large }) {
      margin-left: 5%;
    }
  }

  &:nth-child(even) {
    @media (min-width: ${ Breakpoints.large }) {
      margin-left: auto;
      margin-right: 5%;
    }
  }

  @media (min-width: ${ Breakpoints.large }) {
    width: 75rem;
    height: 30rem;
  }

  @media (min-width: ${ Breakpoints.medium }) {
    height: 31rem;
  }

  @media (min-width: ${ Breakpoints.small }) {
    display: block;
  }
`;

export const CardHeader = styled.h3`
  margin-top: 1rem;

  color: ${ Colors.black };
  text-align: center;
  text-transform: uppercase;
  font-family: ${ Fonts.secondary };
  font-size: ${ FontSizes.subHeader };

  @media (min-width: ${ Breakpoints.medium }) {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  @media (min-width: ${ Breakpoints.small }) {
    text-align: left;
    margin-left: 1rem;
  }
`

export const CardImageContainer = styled.figure`
  margin: 0 auto;
  margin-top: 2.5rem;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  overflow: hidden;
  shape-outside: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  

  @media (min-width: ${ Breakpoints.medium }) {
    width: 25rem;
    height: 25rem;
  }

  @media (min-width: ${ Breakpoints.small }) {
    margin-top: 2.5rem;
    margin-left: 5%;
    float: left;
    transform: translateX(-2rem);
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
  text-align: center;
  margin-top: 3rem;
  padding: 0 3rem;
  font-family: ${ Fonts.primary };
  font-size: ${ FontSizes.mobileCopy };

  @media (min-width: ${ Breakpoints.medium }) {
    font-size: ${ FontSizes.copy };
    margin-top: 7rem;
  }

  @media (min-width: ${ Breakpoints.small }) {
    text-align: left;
  }
`;

export const CardButton = styled.button`
  cursor: pointer;
  margin-top: 3rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${ Colors.redwoodRed };
  color: ${ Colors.redwoodRed };
  font-family: ${ Fonts.secondary };
  text-transform: uppercase;

  &:hover {
    background-color: rgba(0, 0, 0, .2);
  }

  @media (min-width: ${ Breakpoints.small }) {
    position: absolute;
    bottom: 2rem;
    right: 4rem;
    padding-bottom: .5rem;
  }
`
