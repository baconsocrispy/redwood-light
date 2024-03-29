import styled from "styled-components";
import { 
  Colors, 
  Fonts, 
  FontSizes, 
  Breakpoints 
} from "../../utils/theme.styles";

export const AwardsProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  margin-bottom: 2rem;

  @media (min-width: ${ Breakpoints.small }) {
    width: auto;
  }
`

export const AwardsImageContainer = styled.div`
  max-width: 40rem;
  height: 30rem;
  border-radius: 1rem;
  overflow: hidden;
`

export const AwardsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`

export const AwardsTitle = styled.h3`
  display: inline-block;
  font-family: ${ Fonts.secondary };
  text-transform: uppercase;
  font-size: ${ FontSizes.copy };
  color: ${ Colors.black };
`

export const AwardsButton = styled.a`
  cursor: pointer;
  display: inline-block;
  background: none;
  border: none;
  border-bottom: 2px solid ${ Colors.redwoodRed };
  color: ${ Colors.redwoodRed };
  font-family: ${ Fonts.secondary };
  text-transform: uppercase;
  align-self: center;
  font-style: italic;

  &:hover {
    background-color: rgba(0, 0, 0, .2);
  }
`