// @ts-nocheck
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Trip, Itinerary } from "./pages";

function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/login" element=<Login /> />
        <Route path="/signup" element=<Signup /> />
        <Route path="/:placeName/:lat/:long" element=<Trip /> />
        <Route path="/itinerary" element=<Itinerary /> />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
