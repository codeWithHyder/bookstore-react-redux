import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookInput = ({ addNewBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewBook(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="title">
          Add New Book
          <input
            className="title"
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <input
          className="author"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
};

BookInput.propTypes = {
  addNewBook: PropTypes.func.isRequired,
};

export default BookInput;
