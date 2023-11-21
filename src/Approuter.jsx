// @ts-nocheck
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Trip } from "./pages";

function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/login" element=<Login /> />
        <Route path="/signup" element=<Signup /> />
        <Route path="/:placeName/:lat/:long" element=<Trip /> />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
