import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #111;
    font-family: 'Bitter', serif;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    color: #fff;
  }

  button {
    cursor: pointer;
  }
`;
