import React, { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
