import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
import ProductContext from "./context/ProductContext.jsx";
import CartContext from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductContext>
    <UserContext>
      <CartContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContext>
    </UserContext>
  </ProductContext>
);
