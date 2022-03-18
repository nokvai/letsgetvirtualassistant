import React, { FC } from 'react';
import './NavBar.scss';
import { Link } from "react-router-dom";


interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => (
  <div className="NavBar" data-testid="NavBar">
      <li>
          <Link to="/">Home</Link>
      </li>
      <li>
          <Link to="/services">Services</Link>
      </li> 
  </div>
);
 
export default NavBar;
