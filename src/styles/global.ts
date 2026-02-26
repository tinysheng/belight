import { css } from "@emotion/react";

export const globalStyles = css`
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: "Noto Sans SC", sans-serif;
  }
  
  ::view-transition-old(user-card),
  ::view-transition-new(user-card) {
    animation-name: none;
    animation-duration: 520ms;
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    mix-blend-mode: normal;
  }

  :root {
    --primary-color: #0070f3;
  }

  :root {
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
  }
`;