// @ts-nocheck
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from "./pages";

function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/login" element=<Login /> />
        <Route path="/signup" element=<Signup /> />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
