import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementAmountAsync: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementAmountAsync } =
  counterSlice.actions;

export const decrementByAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(decrementAmountAsync(amount));
  }, 2000);
};

export default counterSlice.reducer;
