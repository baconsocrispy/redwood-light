import styled from "styled-components";
import { Colors } from "../../utils/theme.styles";

type BreadcrumbCircleProps = {
  active: boolean;
};

export const BreadcrumbCircle = styled.div<BreadcrumbCircleProps>`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${ (props) => props.active ? Colors.white : 'none' };
  outline: 1px solid ${ Colors.white };

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;