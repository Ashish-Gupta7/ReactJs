import React, { createContext, useEffect, useState } from "react";
import instance from "../utils/Axios";

export const UserContext = createContext();

const Context = (props) => {
  const [users, setusers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await instance.get("/users");
      setusers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setusers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
