import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/feather/user';

const Navbar = () => (
  <nav className="navbar">
    <div className="leftside">
      <h1 className="logo-text">Bookstore CMS</h1>
      <ul className="links-box">
        <li className="link-li">
          <Link to="/" className="link">BOOKS</Link>
        </li>
        <li className="link-li">
          <Link to="/categories" className="link">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <div className="rightside">
      <span className="user"><Icon icon={user} size={24} /></span>
    </div>
  </nav>
);

export default Navbar;
