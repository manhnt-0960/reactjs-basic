import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueSearch: "",
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    handleSearch(state, action) {
      state.valueSearch = action.payload;
    },
  }
})

export const { handleSearch } = headerSlice.actions;
export default headerSlice.reducer;
