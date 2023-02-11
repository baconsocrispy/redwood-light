import { Link } from "react-router-dom";

import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const { colors, fonts, fontSizes } = ThemeStyles;





export const ProjectHeader = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.sectionHeader};
  text-align: center;
  opacity: 0;
  transition: all 1s ease-in-out;
  pointer-events: none;
`;

export const LearnMoreButton = styled(Link)`
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, -50%) skewX(-15deg);
  color: ${colors.white};
  text-transform: uppercase;
  text-decoration: underline;
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.copy};
  transition: all 1s ease-in-out;

  // hide while mouseoff
  opacity: 0;
  visibility: hidden;
`

export const ProjectImageContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ProjectContainer = styled.div`
  position: relative;
  width: 40rem;
  border-radius: 5px;
  box-shadow: 2rem 2rem 10rem rgba(0, 0, 0, 0.3);
  overflow: hidden;

  &:hover ${ProjectImageContainer} {
    filter: blur(5px);
  }

  &:hover ${ProjectHeader} {
    /* filter: blur(4px) brightness(0.5); */
    opacity: 1;
  }

  &:hover ${LearnMoreButton} {
    opacity: 1;
    visibility: visible;
  }
`;