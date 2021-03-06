import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  h1 {
      font-family: "Wire One","Arial Narrow", Arial, sans-serif;
      font-size: 2.5em;
  }
  body {
    font-family: "Arial Narrow", Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: "Arial Narrow", Arial, sans-serif;
  }
  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
