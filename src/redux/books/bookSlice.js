import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/K3rr9q3I2WcXGF3EcDhn/books';

const initialState = {
  books: [],
  isLoading: false,
  error: false,
  success: false,
};

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return error;
  }
});

const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    const res = await axios.delete(`${url}/${id}`);
    return res;
  } catch (error) {
    return error;
  }
});

const postBook = createAsyncThunk('books/postBook', async (book) => {
  try {
    const res = await axios.post(url, book);
    return res.data;
  } catch (error) {
    return error;
  }
});

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = {
        item_id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      state.books.push(book);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const books = action.payload;
      const newBooks = [];
      Object.keys(books).forEach((book) => newBooks.push({
        item_id: book,
        title: books[book][0].title,
        author: books[book][0].author,
      }));
      return ({
        ...state,
        books: newBooks,
        isLoading: false,
      });
    });
    builder.addCase(fetchBooks.rejected, (state) => ({
      ...state,
      isLoading: false,
      error: true,
    }));
    builder.addCase(postBook.pending, (state) => ({
      ...state,
      error: false,
    }));
    builder.addCase(postBook.fulfilled, (state) => ({
      ...state,
      error: false,
    }));
    builder.addCase(postBook.rejected, (state) => ({
      ...state,
      error: true,
    }));
    builder.addCase(removeBook.pending, (state) => ({
      ...state,
      success: false,
    }));
    builder.addCase(removeBook.fulfilled, (state) => ({
      ...state,
      success: true,
    }));
    builder.addCase(removeBook.rejected, (state) => ({
      ...state,
      success: false,
    }));
  },
});

export default bookSlice.reducer;
export const { addBook } = bookSlice.actions;
export { postBook, removeBook, fetchBooks };
