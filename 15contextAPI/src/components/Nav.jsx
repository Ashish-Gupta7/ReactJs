import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center gap-8">
      <NavLink
        className={(e) => `${[e.isActive ? "text-emerald-500" : ""]}`}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => `${[e.isActive ? "text-emerald-500" : ""]}`}
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        className={(e) => `${[e.isActive ? "text-emerald-500" : ""]}`}
        to="/product"
      >
        Product
      </NavLink>
      <NavLink
        className={(e) => `${[e.isActive ? "text-emerald-500" : ""]}`}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Nav;
