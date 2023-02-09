import styled from "styled-components";

export const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .1;
  z-index: -1;
`

export const BackgroundContent = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: invert(100%);
`