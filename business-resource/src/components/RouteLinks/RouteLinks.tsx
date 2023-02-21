import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';


export default function RouteLinks(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/threats" element={<Threats />} />
      <Route path="/architecture" element={<Architecture />} />
      <Route path="/score" element={<Score />} />
      <Route path="/analyze" element={<Analyze />} />
      <Route path="/mitigate" element={<Mitigate />} />
      <Route path="/report" element={<Report />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
