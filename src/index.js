import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "../src/components/App/App";
import { BrowserRouter } from "react-router-dom";
import './components/App/i18n'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
