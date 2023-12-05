// @ts-nocheck
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Trip, Itinerary, SavedTrips } from "./pages";

function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/login" element=<Login /> />
        <Route path="/signup" element=<Signup /> />
        <Route path="/:placeName" element=<Trip /> />
        <Route path="/itinerary" element=<Itinerary /> />
        <Route path="/saved-trips" element=<SavedTrips /> />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
