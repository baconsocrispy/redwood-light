import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: .8;
  }
`;

export const slideInLeft = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;