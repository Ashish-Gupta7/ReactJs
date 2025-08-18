import React, { useContext } from "react";
import { userData } from "../context/UserContext";
import { NavLink, Outlet } from "react-router-dom";

const User = () => {
  const { users, setUsers } = useContext(userData);

  return (
    <>
      <div className="flex items-center gap-2 flex-wrap">
        {users.map((elem, idx) => (
          <NavLink
            key={idx}
            to={`${idx}`}
            className="px-4 py-1 bg-emerald-900 text-white rounded capitalize"
          >
            {elem.username}
          </NavLink>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default User;
