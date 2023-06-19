import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'Under construction',
  },
  reducers: {
    getStatus: (state) => state.status,
  },
});

export const { getStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
