import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cartData } from "../context/CartContext";
import { useForm } from "react-hook-form";

const Form = () => {
  const { idx } = useParams();
  const { carts, setCarts } = useContext(cartData);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { dirtyFields },
    watch,
  } = useForm();

  const watchImage = watch("image", carts[idx]?.image);

  const handleFormSubmit = (data) => {
    const updatedFields = {};

    Object.keys(dirtyFields).forEach((key) => {
      updatedFields[key] = data[key];
    });

    if (Object.keys(updatedFields).length > 0) {
      setCarts((prev) => {
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          ...updatedFields,
        };
        return updated;
      });
    }
  };

  return (
    <div>
      {carts && carts[idx] && (
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex gap-4">
            <span>ID Number:</span> {carts[idx].id}
          </div>
          <div className="flex gap-5">
            <label>Name:</label>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum length of name is 3.",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum length of name id 50.",
                },
              })}
              className="border px-1 rounded"
              type="text"
              name="name"
              defaultValue={carts[idx].name}
            />
          </div>

          <div className="flex gap-5">
            <label>Price:</label>
            <input
              {...register("price", {
                required: "Price is required.",
                min: {
                  value: 1,
                  message: "Minimum price is 1.",
                },
              })}
              className="border px-1 rounded"
              type="number"
              name="price"
              defaultValue={carts[idx].price}
            />
          </div>

          <div className="flex gap-5">
            <label>Quantity:</label>
            <input
              {...register("quantity", {
                required: "Quantity is required.",
                min: {
                  value: 1,
                  message: "Minimum quantity is 1.",
                },
              })}
              className="border px-1 rounded"
              type="number"
              name="quantity"
              defaultValue={carts[idx].quantity}
            />
          </div>

          <div className="flex gap-5">
            <label>Category:</label>
            <input
              {...register("category", {
                required: "Category is required.",
              })}
              className="border px-1 rounded"
              type="text"
              name="category"
              defaultValue={carts[idx].category}
            />
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col">
              <label>Image URL:</label>
              <img
                src={watchImage}
                alt="preview"
                className="w-[84px] h-[84px] mt-2 rounded object-cover"
              />
            </div>

            <textarea
              {...register("image", {
                required: "Image Src is required.",
              })}
              className="border px-1 rounded w-80 resize-none overflow-hidden text-ellipsis"
              name="image"
              defaultValue={carts[idx].image}
              rows={5}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            />
          </div>

          <div className="flex gap-5">
            <label>Description:</label>
            <textarea
              {...register("description", {
                required: "Description is required.",
                minLength: {
                  value: 10,
                  message: "Minimum length of description is 10.",
                },
                maxLength: {
                  value: 1000,
                  message: "Maximum length of description is 1000.",
                },
              })}
              className="border rounded resize-none px-2 py-0.5 w-80 min-h-40"
              name="description"
              defaultValue={carts[idx].description}
            ></textarea>
          </div>

          <div className="flex">
            <button
              onClick={() => navigate("/cart")}
              className="px-4 py-1 bg-emerald-900 rounded-md mt-4 cursor-pointer"
              type="submit"
            >
              Update Cart
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
