import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routing } from "./Routing";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Routing /> */}
    <BrowserRouter basename="/react-weather">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
