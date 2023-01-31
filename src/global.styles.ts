import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --theme-font-color-primary: rgb(75, 76, 82);
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: var(--theme-font-color-primary)
  }

  a {
    text-decoration: none;
    color: var(--theme-font-color-primary);
  }
`