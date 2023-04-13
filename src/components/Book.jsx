import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { removeBook, fetchBooks } from '../redux/features/books/bookSlice';

const Book = () => {
  const bookData = useSelector((state) => state.allBook);
  const dispatch = useDispatch();
  const {
    isLoading, error, books, success,
  } = bookData;

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, success]);

  if (isLoading) {
    return <p>Please wait for a while data is loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!books) {
    return null;
  }

  return (
    <div style={{ margin: '2rem 20rem' }}>
      { books && books.map((book) => (
        <ul key={uuid()}>
          <li>
            {book.title}
          </li>
          <li>
            {book.author}
          </li>
          <li>
            <button
              onClick={() => dispatch(removeBook(book.item_id))}
              type="button"
            >
              Remove
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Book;
