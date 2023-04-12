import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.allBooks.books);
  const dispatch = useDispatch();
  return (
    <div className="book-wrap">
      {books.map((book) => (
        <div className="books" key={book.item_id}>
          <ul className="booklst">
            <li>{book.category}</li>
            <li>{book.title}</li>
            <li>
              <span>
                by
                {' '}
                {book.author}
              </span>
            </li>
            <li>
              <button type="button" className="remove" onClick={() => { dispatch(removeBook(book.item_id)); }}>
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
