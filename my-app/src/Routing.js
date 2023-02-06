import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import App from "./Pages/Game/App";
import React from "react";
export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<App />} />
    </Routes>
  );
};
