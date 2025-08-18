import React, { useContext } from "react";
import { cartData } from "../context/CartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { carts } = useContext(cartData);

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
      {carts.map((elm, idx) => (
        <div
          key={idx}
          className="mb-4 break-inside-avoid bg-zinc-900 rounded-md overflow-hidden shadow-md"
        >
          <img className="w-full object-cover" src={elm.image} alt={elm.name} />
          <div className="p-2 text-white text-sm flex flex-col gap-1">
            <h4 className="font-semibold">
              <span className="text-emerald-500">Name:</span> {elm.name}
            </h4>
            <h4 className="font-semibold">
              <span className="text-emerald-500">Price:</span> {elm.price}
            </h4>
            <h4 className="font-semibold">
              <span className="text-emerald-500">Quantity:</span> {elm.quantity}
            </h4>
            <h4 className="font-semibold">
              <span className="text-emerald-500">Category:</span> {elm.category}
            </h4>
            <h4 className="text-xs text-justify">
              <span className="text-emerald-500 text-base">Description: </span>{" "}
              {elm.description}
            </h4>
            <NavLink
              to={`/form/${idx}`}
              className="px-4 py-1 bg-black rounded mt-2 cursor-pointer text-center"
            >
              Edit Cart
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
