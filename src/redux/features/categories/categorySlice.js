const { createSlice } = require('@reduxjs/toolkit');

const initialCategory = {
  status: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState: initialCategory,
  reducers: {
    checkStatus: (state) => {
      state.status.push({ value: 'Under Construction' });
    },
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
