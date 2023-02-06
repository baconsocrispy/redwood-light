import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  // set default rem to 10px
  html {
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;
