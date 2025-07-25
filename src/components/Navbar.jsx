import React from "react";
import { NavLink } from "react-router-dom";
import '../style/Navbar.css';

const Navbar = () => {

  const navItems = ['testinomial', 'features', 'course', 'grid'];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li
            key={item}
          >
            <NavLink
              to={`/${item}`}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;