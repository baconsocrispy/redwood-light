import styled from "styled-components";
import { Link } from "react-router-dom";
import ThemeStyles from "../../utils/theme.styles";

const { breakpoints, colors } = ThemeStyles;

export const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0;
`

export const Hamburger = styled.div`
  cursor: pointer;
  position: relative;
  width: 3rem;
  height: 2px;
  
  background-color: ${ colors.redwoodRed };

  &::after,
  &::before {
    content: "";
    display: block;
    background-color: inherit;
    height: 2px;
    width: 100%;
  }

  &::before {
    transform: translateY(-.8rem);
  }
  
  &::after {
    transform: translateY(.6rem);
  }

  @media (min-width: ${ breakpoints.medium }) {
    display: none;
  }
`

export const Menu = styled.ul`
  display: none;
  list-style: none;
  height: 100%;

  @media (min-width: ${ breakpoints.medium }) {
    display: flex;
  }
`

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0% 2%;
`

export const MenuLink = styled(Link)`
  color: ${ colors.black };
  font-size: 1.5rem;
`