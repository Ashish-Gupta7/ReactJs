import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncProducts } from "../store/actions/ProductActions";

const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    dispatch(asyncProducts());
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-emerald-500 font-semibold text-xl mb-2">
        Product List
      </h1>
      <div className="flex flex-col gap-2">
        {products &&
          products.map((elem, idx) => {
            return (
              <h4 key={idx} className="">
                {idx + 1}. {elem.title}
              </h4>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
