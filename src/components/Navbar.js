import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Navbar.css';
import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/feather/user';

const Navbar = () => (
  <nav className="navbar container">
    <div className="leftside">
      <h1 className="logo-text">Bookstore CMS</h1>
      <ul className="links-box">
        <li className="link-li">
          <NavLink to="/" className="link">BOOKS</NavLink>
        </li>
        <li className="link-li">
          <NavLink to="/categories" className="link">CATEGORIES</NavLink>
        </li>
      </ul>
    </div>
    <div className="rightside">
      <span className="user"><Icon icon={user} size={24} /></span>
    </div>
  </nav>
);

export default Navbar;
