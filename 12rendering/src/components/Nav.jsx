import { NavLink } from "react-router-dom";

// Yaha hum anchor tag ki jagah pr Link tag ka use krte hai ye page ko refresh nhi hone deta hai isliye ise use krte hai.

const Nav = () => {
  return (
    <div className=" flex items-center gap-6">
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
      <NavLink
        className={(e) => (e.isActive ? "text-emerald-500" : "")}
        style={(e) => (e.isActive ? { textDecoration: "underline" } : {})}
        to="/nesting"
      >
        Nesting
      </NavLink>
    </div>
  );
};

export default Nav;
