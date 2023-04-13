import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
    <div>
      { books && books.map((book) => (
        <div className="LessonPanel flex" key={uuid()}>
          <div className="bookCard1">
            <p className="bookCategory">Non Fiction</p>
            <p className="Title">
              {book.title}
            </p>
            <p className="commentsEdit">
              {book.author}
            </p>
            <div>
              <button className="commentsEdit" type="button">Comments</button>
              <span className="line" />
              <button
                className="commentsEdit"
                onClick={() => dispatch(removeBook(book.item_id))}
                type="button"
              >
                Remove
              </button>
              <span className="line" />
              <button className="commentsEdit" type="button">Edit</button>
            </div>
          </div>
          <div className="bookCard2 flex">
            <div className="ProgressOvalDiv ">
              <CircularProgressbar className="ProgressOval" value={25} />
            </div>
            <div>
              <p className="Percent-Complete">35%</p>
              <p className="Completed">Completed</p>
            </div>
          </div>
          <span className="line2" />
          <div className="bookCard3">
            <p className="currentChapter">CURRENT CHAPTER</p>
            <p className="currentLesson">Chapter x </p>
            <button className="updateButton" type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Book;
