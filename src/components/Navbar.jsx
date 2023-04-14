import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="header">
    <h1 className="bkstore same">Bookstore CMS</h1>
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink className="category" to="/categories">
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
    <i className="fa-solid fa-user" />
  </header>
);

export default Navbar;
