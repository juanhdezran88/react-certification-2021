import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: white;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
