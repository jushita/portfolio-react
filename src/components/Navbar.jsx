import React from 'react';
import {  Link } from "react-router-dom";


const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">About</Link>
    </li>
    
    <li>
      <Link to="/resume">Resume</Link>
    </li>
    <li>
      <Link to="/photo-blog">Photo Blog</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </div>
  );
}
export default Navbar;