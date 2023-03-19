import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/globalStyle";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
