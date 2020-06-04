import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { ThemeProvider } from "./ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
