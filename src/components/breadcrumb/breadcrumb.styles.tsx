import styled from "styled-components";
import { Colors } from "../../utils/theme.styles";

type BreadcrumbCircleProps = {
  active: boolean;
};

export const BreadcrumbCircle = styled.div<BreadcrumbCircleProps>`
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: ${ (props) => props.active ? Colors.white : 'none' };
  outline: 1px solid ${ Colors.white };
  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;