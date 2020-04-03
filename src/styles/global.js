import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding:0;
    margin:0;
    outline: 0;
    box-sizing:border-box;
  }

  html, body, #root{
    min-height:100%;
  }

  body{
    background:#18191A;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color:#C9C9C9;
    font-size:14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
