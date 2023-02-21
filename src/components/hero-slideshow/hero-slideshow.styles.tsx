import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { breakpoints } = ThemeStyles;

export const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  display: block;
  overflow: hidden;

  @media only screen and (min-width: ${ breakpoints.medium }) {
    min-height: 55rem;
  }
`;

export const SlideshowImageContainer = styled.div`
  position: relative;
  width: 100%;
`
export const SlideshowImage = styled.img`
  position: absolute;
  width: 100%;
  height: 30rem;
  object-fit: cover; // keeps images proportional as screen size adjusts
  transition: opacity 1s ease-in-out;
  background-position: bottom;

  @media (min-width: ${breakpoints.medium}) {
    height: 70rem;
  }
`;

export const SlideshowButtonContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 50%;
  padding: 0 1em;
`;

export const SlideshowButton = styled.button`
  background: none;
  border: none;
  z-index: 50;
`;

export const SlideshowArrowIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: white;
  font-size: 2.5rem;
  opacity: 1;

  &:hover {
    opacity: 1;
  }

  @media (min-width: ${breakpoints.medium}) {
    opacity: .7;
  }
`;
