import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Opportunies from '../Opportunies/Opportunies';
import FoodTruck from '../FoodTruck/FoodTruck';
import Calculator from '../Calculator/Calculator';
import Permits from '../Permits/Permits';


export default function RouteLinks(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/opportunities" element={<Opportunies />} />
      <Route path="/foodtrucks" element={<FoodTruck />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/permits" element={<Permits />} />
      <Route path="/secret" element={<h2>My secret information :)</h2>} />
    </Routes>
  );
};
