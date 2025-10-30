import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./app.css";

import Home from "./routes/home";
import About from "./routes/about";
import Institutes from "./routes/institutes";
import Members from "./routes/members";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/institutes" element={<Institutes />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
