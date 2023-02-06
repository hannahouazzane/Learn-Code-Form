import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./Routing";
import "./Pages/Game/App.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="App">
        <Routing />
      </div>
    </React.StrictMode>
  </BrowserRouter>
);
