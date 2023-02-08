import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { breakpoints, heights } = ThemeStyles;

export const SlideshowWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const SlideshowContainer = styled.div`
  width: 100%;
  position: relative;
`;

type TransitionProps = {
  state: string;
  timing: number;
};

export const SlideshowImage = styled.img<TransitionProps>`
  width: 100%;
  height: 30rem;
  object-fit: cover; // keeps images proportional as screen size adjusts
  opacity: ${({ state }) =>
    state === "entered" || state === "entering" ? 1 : 0};
  transition: opacity ${({ timing }) => timing}ms ease-in-out;
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
