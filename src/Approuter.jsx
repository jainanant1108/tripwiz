// @ts-nocheck
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Trip, Itinerary, SavedTrips } from "./pages";
import Status from "./pages/Status";

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
        <Route path="/status" element=<Status /> />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
