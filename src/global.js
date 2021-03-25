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
  .modals.modal-wrapper {
    display: flex !important;
  }
  #root {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export default GlobalStyle;
