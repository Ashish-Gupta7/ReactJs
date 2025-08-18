import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Product from "./components/Product";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/product">Product</Link>
      </nav>
      <hr className="pt-2 pb-4" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
