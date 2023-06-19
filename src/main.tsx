import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import axe from "@axe-core/react";
import "./i18n/i18n.ts";

const axeConf = {
  rules: [{ id: "skip-link", enabled: true }],
};

if (process.env.NODE_ENV !== "production") {
  axe(React, ReactDOM, 1000, axeConf);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
