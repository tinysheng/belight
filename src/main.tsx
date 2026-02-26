import { createRoot } from "react-dom/client";
import { Global, ThemeProvider } from "@emotion/react";

import App from "./App.tsx";
import { reset } from "./styles/reset.ts";
import { globalStyles } from "./styles/global.ts";
import { theme } from "./styles/theme.ts";

const root = createRoot(document.getElementById("root")!);

root.render(
  <ThemeProvider theme={theme}>
    <Global styles={[reset, globalStyles]} />
    <App />
  </ThemeProvider>,
);
