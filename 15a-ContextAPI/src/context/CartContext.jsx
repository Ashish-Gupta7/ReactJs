import React, { createContext, useState } from "react";

export const cartData = createContext();

const dataOfCart = [
  {
    id: 1,
    name: "Wireless Headphones",
    image:
      "https://plus.unsplash.com/premium_photo-1677158265072-5d15db9e23b2?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBoZWFkcGhvbmV8ZW58MHx8MHx8fDA%3D",
    price: 2499,
    quantity: 2,
    category: "Electronics",
    description: "High quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Running Shoes",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJ1bm5pbmclMjBTaG9lfGVufDB8fDB8fHww",
    price: 3499,
    quantity: 1,
    category: "Footwear",
    description: "Lightweight running shoes with breathable material.",
  },
  {
    id: 3,
    name: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNtYXJ0JTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D",
    price: 5999,
    quantity: 1,
    category: "Electronics",
    description: "Fitness tracking smartwatch with heart rate monitor.",
  },
  {
    id: 4,
    name: "Casual Backpack",
    image:
      "https://plus.unsplash.com/premium_photo-1723649902593-471185415b4e?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENhc3VhbCUyMEJhY2twYWNrfGVufDB8fDB8fHww",
    price: 1799,
    quantity: 3,
    category: "Bags",
    description: "Durable backpack with multiple compartments.",
  },
  {
    id: 5,
    name: "T-Shirt",
    image:
      "https://plus.unsplash.com/premium_photo-1673356301514-2cad91907f74?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VCUyMFNoaXJ0fGVufDB8fDB8fHww",
    price: 999,
    quantity: 2,
    category: "Clothing",
    description: "Comfortable cotton t-shirt available in multiple sizes.",
  },
];

const CartContext = (props) => {
  const [carts, setCarts] = useState(dataOfCart);

  return (
    <cartData.Provider value={{ carts, setCarts }}>
      {props.children}
    </cartData.Provider>
  );
};

export default CartContext;
