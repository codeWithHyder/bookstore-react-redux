import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, getBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>please wait it is loading...</p>;
  }

  if (error) {
    return <p>Error occurred while fetching books</p>;
  }
  return (
    <div className="book-wrap">
      {books.map((book) => (
        <div className="books" key={book.item_id}>
          <ul>
            <li>{book.category}</li>
            <li>{book.title}</li>
            <li style={{ paddingLeft: '6rem' }}>
              <span style={{ fontWeight: '700', fontSize: '20px' }}> by </span>
              {book.author}
              <br />
              <button
                type="button"
                className="remove"
                onClick={() => {
                  dispatch(removeBook(book.item_id));
                }}
              >
                Remove
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BookList;
