import axios from "../utils/axios";

const Products = () => {
  const getProducts = async () => {
    const { data } = await axios.get("/products");
    console.log(data);
  };
  return (
    <div>
      <h1>Products.jsx</h1>
      <button
        onClick={getProducts}
        className="bg-black text-white px-4 py-1 rounded capitalize mt-4"
      >
        getproducts
      </button>
    </div>
  );
};

export default Products;
