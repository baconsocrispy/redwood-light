import styled from "styled-components";
import { 
  Colors, 
  Fonts, 
  FontSizes, 
  Breakpoints 
} from "../../utils/theme.styles";

export const TeamCardContainer = styled.div`
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
    height: auto;
  }

  @media (min-width: ${ Breakpoints.small }) {
    display: block;
  }
`

export const TeamCardHeader = styled.h3`
  margin-top: 1rem;

  color: ${ Colors.redwoodRed };
  text-align: center;
  text-transform: uppercase;
  font-family: ${ Fonts.secondary };
  font-size: ${ FontSizes.subHeader };

  @media (min-width: ${ Breakpoints.medium }) {
    position: absolute;
    top: 1rem;
    right: 4rem;
  }

  @media (min-width: ${ Breakpoints.small }) {
    text-align: left;
    margin-left: 1rem;
  }
`

export const TeamCardSubHeader = styled.h4`
  text-align: center;
  font-size: ${ FontSizes.mobileCopy };
  font-family: ${ Fonts.primary };
  font-style: italic;

  @media (min-width: ${ Breakpoints.medium }) {
    position: absolute;
    top: 4.5rem;
    right: 4rem;
  }

  @media (min-width: ${ Breakpoints.small }) {
    text-align: left;
    margin-left: 1rem;
  }
`

export const TeamCardDescription = styled.p`
  text-align: center;
  margin-top: 3rem;
  padding: 0 3rem;
  font-family: ${ Fonts.primary };
  font-size: ${ FontSizes.mobileCopy };

  @media (min-width: ${ Breakpoints.medium }) {
    margin-top: 7rem;
  }

  @media (min-width: ${ Breakpoints.small }) {
    text-align: left;
  }
`;