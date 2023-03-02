import styled from "styled-components";
import { Colors } from "../../utils/theme.styles";

type BreadcrumbCircleProps = {
  active: boolean;
};

export const BreadcrumbCircle = styled.div<BreadcrumbCircleProps>`
  display: inline-block;
  width: .75rem;
  height: .75rem;
  background-color: ${ (props) => props.active ? Colors.white : 'none' };
  border: 1px solid ${ Colors.white };
  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;