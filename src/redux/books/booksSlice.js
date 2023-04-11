import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    },
    removeBook: (state, action) => {
      const bookToRemove = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.id !== bookToRemove.id)
      };
    },
  },
});


export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
