import React from 'react';
import {  NavLink } from "react-router-dom";


const Navbar= () =>{
  return (
  <div className="navigation-body">
    <a>
      <NavLink to="/">About</NavLink>
    </a>
    <a>
      <NavLink to="/resume">Resume</NavLink>
    </a>
    <a>
      <NavLink to="/photo-blog">Photo Blog</NavLink>
    </a>
    <a>
      <NavLink to="/illustrations">Illustrations</NavLink>
    </a>
  </div>
  );
}
export default Navbar;