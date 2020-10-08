import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
  // eslint-disable-next-line
  const axe = require("@axe-core/react");
  axe(React, ReactDOM);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
