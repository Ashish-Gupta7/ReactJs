import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex items-center gap-10 px-10 py-6 bg-black text-white">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/products">Products</NavLink>
    </div>
  );
};

export default Nav;
