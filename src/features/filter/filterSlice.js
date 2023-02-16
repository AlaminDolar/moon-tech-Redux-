import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: false,
  brands: [],
  keyword: "",
};

const filterSlice = createSlice({
  initialState,
  name: "filter",
  reducers: {
    toggle: (state) => {
      state.stock = !state.stock;
    },
    togglebrands: (state, action) => {
      if (!state.brands.includes(action.payload)) {
        state.brands.push(action.payload);
      } else {
        state.brands = state.brands.filter((brand) => brand !== action.payload);
      }
    },
  },
});

export const { toggle, togglebrands } = filterSlice.actions;

export default filterSlice.reducer;
