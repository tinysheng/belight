import { css } from "@emotion/react";

export const reset = css`
  *,
  *::before,
  *::after {
    scroll-behavior: smooth;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
  }
  
  body {
    min-height: 100vh;
    font-family: 'SourceHanSans';
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  ul,
  ol {
    list-style: none;
  }
  
  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
  }
  
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
    background-color: transparent;
    border: 1px solid transparent;
    outline: none;
  }
  
  button {
    cursor: pointer;
    padding: 0;
    appearance: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  
  :where([dir='rtl'], [dir='ltr']) {
    direction: unset;
  }
`;