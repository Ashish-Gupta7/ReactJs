import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";

export const asyncProducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("https://fakestoreapi.in/api/products");
    dispatch(getProducts(response.data.products));
  } catch (error) {
    console.error(error);
  }
};
