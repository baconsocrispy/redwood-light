import styled from "styled-components";
import { Colors, Fonts } from "../../utils/theme.styles";

export const ContactButton = styled.button`
  position: fixed;
  cursor: pointer;
  padding: 1rem;
  width: 10rem;
  right: 4rem;
  bottom: 2rem;
  border: 1px solid ${ Colors.redwoodRed };
  color: ${ Colors.redwoodRed };
  font-family: ${ Fonts.secondary };
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 3px;
  box-shadow: 2rem 2rem 10rem rgba(0, 0, 0, 0.7);
  z-index: 9999;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;
