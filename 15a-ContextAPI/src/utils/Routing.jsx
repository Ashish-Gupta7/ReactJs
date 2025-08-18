import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Product from "../components/Product";
import User from "../components/User";
import UserDetails from "../components/UserDetails";
import Cart from "../components/Cart";
import Form from "../components/Form";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />}>
        <Route path="/user/:idx" element={<UserDetails />} />
      </Route>
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/form/:idx" element={<Form />} />
    </Routes>
  );
};

export default Routing;
