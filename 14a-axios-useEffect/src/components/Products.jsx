import { useEffect } from "react";
import axios from "../utils/axios";

const Products = () => {
  const getproducts = async () => {
    const { data } = await axios.get("/products");
    console.log(data);
  };
  useEffect(() => {
    getproducts();
  });
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;

// Yaha ek problem hai ki jab tk user products button pr click nhi krta hai to usey data show nhi hota ya data nhi milta hai.
// Isi ko thik krne ke liye, mtlb user page pr jaye to usey jate samay hi poora data dikh jaye, kahi click krne ki jarurat naa pade.
// Iske liye hum useEffect() ka use krte hai
// Ye sb kaise kaam krta hai wo Users.jsx components me hai.
