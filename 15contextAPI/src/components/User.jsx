import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { NavLink, Outlet } from "react-router-dom";

const User = () => {
  const { users } = useContext(UserContext);

  return (
    <>
      <div className="text-white flex items-center gap-4 flex-wrap">
        {users.map((elem, idx) => (
          <NavLink
            to={`${idx}`}
            key={idx}
            className="px-4 py-1 bg-gray-800 text-white rounded-md cursor-pointer"
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
