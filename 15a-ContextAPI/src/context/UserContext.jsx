import React, { createContext, useEffect, useState } from "react";
import instance from "../utils/Axios";

export const userData = createContext();

const UserContext = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await instance.get("/users");
    setUsers(data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <userData.Provider value={{ users, setUsers }}>
      {props.children}
    </userData.Provider>
  );
};

export default UserContext;
