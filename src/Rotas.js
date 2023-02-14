import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Principal/Main";
import Rep from "./Pages/Rep/Rep";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Rep/:Rep" element={<Rep />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
