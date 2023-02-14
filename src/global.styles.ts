import { createGlobalStyle } from "styled-components";
import ThemeStyles from "./utils/theme.styles";

const { heights } = ThemeStyles;

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; // set default rem to 10px
    scroll-behavior: smooth;
  }
  
  body {
    box-sizing: border-box;
    margin-top: ${heights.navHeight}; // offset body to accommodate fixed header
  }

  a {
    text-decoration: none;
  }
`;
