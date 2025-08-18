import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/reducers/UserReducer";

const User = () => {
  const { users } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  const deleteHandler = (idx) => {
    dispatch(deleteUser(idx));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-emerald-500 font-semibold text-xl mb-2">User List</h1>
      {users.map((elem, idx) => {
        return (
          <h3 key={elem.id}>
            {elem.name}{" "}
            <span
              onClick={() => deleteHandler(idx)}
              className="text-red-500 font-semibold cursor-pointer"
            >
              X
            </span>
          </h3>
        );
      })}
    </div>
  );
};

export default User;
