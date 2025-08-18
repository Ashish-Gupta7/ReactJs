import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAsync,
  increment,
  incrementByAmount,
} from "./reducers/counterSlice";

const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="m-auto container mt-5 bg-red-100 p-10">
      <h1 className="text-center font-semibold text-3xl text-red-900">
        Counter: {value}
      </h1>

      <div className="flex gap-4 items-center justify-center mt-6">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-1 rounded bg-red-900 text-red-100"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-1 rounded bg-red-900 text-red-100"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-1 rounded bg-red-900 text-red-100"
        >
          Increment By Amount 5
        </button>
        <button
          onClick={() => dispatch(decrementByAsync(5))}
          className="px-4 py-1 rounded bg-red-900 text-red-100"
        >
          Decrement By Amount 5
        </button>
      </div>
    </div>
  );
};

export default App;
