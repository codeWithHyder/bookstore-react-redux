import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header style={{ display: 'flex', justifyContent: 'space-evenly' }}>
    <h1>Bookstore CMS</h1>
    <nav>
      <ul style={{ display: 'flex', gap: '2rem' }}>
        <li>
          <NavLink to="/">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories">
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
