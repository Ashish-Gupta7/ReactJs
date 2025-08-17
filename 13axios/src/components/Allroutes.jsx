import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Products from "./Products";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default Allroutes;
