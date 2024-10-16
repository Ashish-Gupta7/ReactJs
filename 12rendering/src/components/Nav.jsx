import { NavLink } from "react-router-dom";

// Yaha hum anchor tag ki jagah pr Link tag ka use krte hai ye page ko refresh nhi hone deta hai isliye ise use krte hai.

const Nav = () => {
  return (
    <div>
      <NavLink
        style={(e) => (e.isActive ? { textDecoration: "underline" } : {})}
        className={(e) => (e.isActive ? "text-emerald-500" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={(e) => (e.isActive ? { textDecoration: "underline" } : {})}
        className={(e) => (e.isActive ? "text-emerald-500" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={(e) => (e.isActive ? { textDecoration: "underline" } : {})}
        className={(e) => (e.isActive ? "text-emerald-500" : "")}
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        style={(e) => (e.isActive ? { textDecoration: "underline" } : {})}
        className={(e) => (e.isActive ? "text-emerald-500" : "")}
        to="/services"
      >
        Services
      </NavLink>
      <NavLink
        style={(e) => (e.isActive ? { textDecoration: "underline" } : {})}
        className={(e) => (e.isActive ? "text-emerald-500" : "")}
        to="/items"
      >
        Items
      </NavLink>
    </div>
  );
};

export default Nav;
