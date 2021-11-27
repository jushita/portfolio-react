import React from 'react';
import {  NavLink } from "react-router-dom";


const Navbar= () =>{
  return (
  <div className="navigation-body">
    <div>
      <a className="navigation-item">
        <NavLink to="/home/about">About</NavLink>
      </a>
      <a className="navigation-item">
        <NavLink to="/home/resume">Resume</NavLink>
      </a>
      <a className="navigation-item">
        <NavLink to="/home/photo-blog">Photo Blog</NavLink>
      </a>
      <a className="navigation-item">
        <NavLink to="/home/illustrations">Skills</NavLink>
      </a>
    </div>
  </div>
  );
}
export default Navbar;