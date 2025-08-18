import React, { createContext, useEffect, useState } from "react";
import instance from "../utils/Axios";

export const productData = createContext();

const ProductContext = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await instance.get("/products");
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <productData.Provider value={{ products, setProducts }}>
      {props.children}
    </productData.Provider>
  );
};

export default ProductContext;
