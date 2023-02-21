import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
  <nav className='navbar'>
    <div className='navbar-collapse collapse w-100 justify-content-center'>
    <NavLink to="/" className='navbar-brand rounded'>
      Home
    </NavLink>
    <NavLink to="/opportunities" className='navbar-brand rounded'>
      Opportunities
    </NavLink>
    <NavLink to="/foodtrucks" className='navbar-brand rounded'>
      Food Trucks
    </NavLink>
    <NavLink to="/calculator" className='navbar-brand rounded'>
      Calculator
    </NavLink>
    <NavLink to="/permits" className='navbar-brand rounded'>
      Permits
    </NavLink>
    </div>
  </nav>)
}
