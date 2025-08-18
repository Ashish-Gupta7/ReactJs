import React, { useContext } from "react";
import { productData } from "../context/ProductContext";

const Product = () => {
  const { products, setProducts } = useContext(productData);

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
      {products.map((elm, idx) => (
        <div
          key={idx}
          className="mb-4 break-inside-avoid bg-zinc-900 rounded-md overflow-hidden shadow-md"
        >
          <img
            className="w-full object-cover"
            src={elm.image}
            alt={elm.title}
          />
          <div className="p-2 text-white text-sm flex flex-col gap-1">
            <h4 className="font-semibold">
              <span className="text-emerald-500">Title:</span> {elm.title}
            </h4>
            <h4 className="font-semibold">
              <span className="text-emerald-500">Price:</span> {elm.price}
            </h4>
            <h4 className="font-semibold">
              <span className="text-emerald-500">Color:</span> {elm.color}
            </h4>
            <h4 className="font-semibold">
              <span className="text-emerald-500">Brand:</span> {elm.brand}
            </h4>
            <h4 className="font-semibold">
              <span className="text-emerald-500">Model:</span> {elm.model}
            </h4>
            <h4 className="font-semibold">
              <span className="text-emerald-500">Category:</span> {elm.category}
            </h4>
            <h4 className="text-xs text-justify">
              <span className="text-emerald-500 text-base">Description: </span>{" "}
              {elm.description}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
