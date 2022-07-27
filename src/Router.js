import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./About";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
