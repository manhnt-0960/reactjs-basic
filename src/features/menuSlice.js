import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTypesAPI} from "../api/index";

export const fetchTypes = createAsyncThunk(
  'menu/fetchTypes',
  async () => {
    const allTypes = await fetchTypesAPI();
    return allTypes;
  },
);

const initialState = {
  valueTitle: "",
  valueType: "",
  valueByType: [],
  valueBrand: [],
  valueRating: "",
  valuePriceStart: "",
  valuePriceEnd: "",
  types: [],
  MenuIsLoading: false,
  error: "",
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    handleTitle(state, action) {
      state.valueTitle = action.payload;
    },

    handleType(state, action) {
      state.valueType = action.payload;
    },

    handleByType(state, action) {
      const currentType = state.valueByType.indexOf(action.payload);

      if (currentType === -1) {
        state.valueByType.push(action.payload);
      } else {
        state.valueByType.splice(currentType, 1);
      }
    },

    handleBrand(state, action) {
      const currentBrand = state.valueBrand.indexOf(action.payload);

      if (currentBrand === -1) {
        state.valueBrand.push(action.payload);
      } else {
        state.valueBrand.splice(currentBrand, 1);
      }
    },

    handlePriceStart(state, action) {
      state.valuePriceStart = action.payload;
    },

    handlePriceEnd(state, action) {
      state.valuePriceEnd = action.payload;
    },

    handleRating(state, action) {
      state.valueRating = action.payload;
    },

    handleClearFillter(state, action) {
      state.valueTitle = "";
      state.valueType = "";
      state.valueByType = [];
      state.valueBrand = [];
      state.valueRating = "";
      state.valuePriceStart = "";
      state.valuePriceEnd = "";
      state.MenuIsLoading = false;
      state.error = "";
    },
  },

  extraReducers: {
    [fetchTypes.pending]: (state) => {
      state.MenuIsLoading = true;
    },

    [fetchTypes.fulfilled]: (state, action) => {
      state.MenuIsLoading = false;
      state.types = action.payload;
    },
  }
})

export const {
  handleTitle,
  handleType,
  handleByType,
  handleBrand,
  handleRating,
  handlePriceStart,
  handlePriceEnd,
  handleClearFillter,
} = menuSlice.actions;

export default menuSlice.reducer;
