import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
    line-height: 1.7;
    color: #111;
    background: #fff;
    min-height: 100vh;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  #root {
    max-width: 680px;
    margin: 0 auto;
    padding: 120px 24px;
  }

  a {
    color: #000;
    text-decoration: underline;
    &:hover {
      opacity: 0.8;
    }
  }
`;
