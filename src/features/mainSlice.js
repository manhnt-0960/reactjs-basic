import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../api/index";

export const loadProduct = createAsyncThunk(
  'main/loadProduct',
  async ({
    valueTitle,
    valueType,
    valueByType,
    valueBrand,
    valueRating,
    valuePriceStart,
    valuePriceEnd,
    valueSearch,
    sort,
  }) => {
    const products = await fetchProducts({
      valueTitle,
      valueType,
      valueByType,
      valueBrand,
      valueRating,
      valuePriceStart,
      valuePriceEnd,
      valueSearch,
      sort,
    });
    return products;
  }
);

const initialState = {
  currentPage: 1,
  products: [],
  isLoading: false,
  sort: "",
}

const mainSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    handleCurrentPage(state, action) {
      state.currentPage = action.payload;
    },

    handleSort(state, action) {
      state.sort = action.payload;
    },
  },
  extraReducers: {
    [loadProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    
    [loadProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
  },
});

export const {
  handleCurrentPage,
  handleSort,
} = mainSlice.actions;

export default mainSlice.reducer;
