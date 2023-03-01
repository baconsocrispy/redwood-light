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

type MenuProps = {
  open: boolean;
}

export const Menu = styled.ul<MenuProps>`
  display: flex;
  position: absolute;

  top: 8rem;
  right: ${ (props) => props.open ? '0' : '-100%' };

  list-style: none;
  background-color: ${ colors.redwoodRed };
  color: ${ colors.white };
  opacity: ${ (props) => props.open ? '1' : '0' };

  transition: all .5s ease-in-out;

  @media (min-width: ${ breakpoints.medium }) {
    position: relative;
    height: 100%;    
    top: 0;
    right: 0;
    opacity: 1;
    color: ${ colors.redwoodRed };
    background-color: transparent;
    transition: none;
  }
`

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;

  @media (min-width: ${ breakpoints.medium }) {
    padding: 0% 2%;
  }
`

export const MenuLink = styled(Link)`
  color: currentColor;
  font-size: 1.5rem;
`