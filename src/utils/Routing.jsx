import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import Product from "../components/Product";
import About from "../components/About";
import UserDetails from "../components/UserDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />}>
        <Route path="/user/:idx" element={<UserDetails />} />
      </Route>
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routing;
