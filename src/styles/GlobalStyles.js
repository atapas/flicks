import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: #031c22;
    color: #FFFFFF;
    font-family: 'Tinos';
    transition: all 0.50s linear;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    color: #FFFFFF;
    text-decoration: none;
  }

  a:hover {
    color: #e7cde7
  }
`;