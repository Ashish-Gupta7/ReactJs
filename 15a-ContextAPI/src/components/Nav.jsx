import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center gap-10">
      <NavLink
        className={(e) => `${e.isActive ? "text-emerald-500" : "text-white"}`}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => `${e.isActive ? "text-emerald-500" : "text-white"}`}
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        className={(e) => `${e.isActive ? "text-emerald-500" : "text-white"}`}
        to="/product"
      >
        Product
      </NavLink>
      <NavLink
        className={(e) => `${e.isActive ? "text-emerald-500" : "text-white"}`}
        to="/cart"
      >
        Cart
      </NavLink>
    </nav>
  );
};

export default Nav;
