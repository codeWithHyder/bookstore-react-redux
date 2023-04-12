import { configureStore } from '@reduxjs/toolkit';

import bookReducer from './features/books/bookSlice';
import categoryReducer from './features/categories/categorySlice';

const store = configureStore({
  reducer: {
    allBook: bookReducer,
    category: categoryReducer,
  },
});

export default store;
