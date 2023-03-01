import styled from "styled-components";
import { Link } from "react-router-dom";
import { Breakpoints, Colors } from "../../utils/theme.styles";

export const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0;
`

export const Hamburger = styled.div`
  cursor: pointer;
  position: relative;
  width: 3rem;
  height: 2px;
  
  background-color: ${ Colors.redwoodRed };

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

  @media (min-width: ${ Breakpoints.medium }) {
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
  background-color: ${ Colors.redwoodRed };
  color: ${ Colors.white };
  opacity: ${ (props) => props.open ? '1' : '0' };

  transition: all .5s ease-in-out;

  @media (min-width: ${ Breakpoints.medium }) {
    position: relative;
    height: 100%;    
    top: 0;
    right: 0;
    opacity: 1;
    color: ${ Colors.redwoodRed };
    background-color: transparent;
    transition: none;
  }
`

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;

  @media (min-width: ${ Breakpoints.medium }) {
    padding: 0% 2%;
  }
`

export const MenuLink = styled(Link)`
  color: currentColor;
  font-size: 1.5rem;
`