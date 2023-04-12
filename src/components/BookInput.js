import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookInput = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: uuidv4(), title, author, category,
    }));
    setTitle('');
    setAuthor('');
    setCategory('');
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
            required
          />
        </label>
        <input
          className="author"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Please choose prefered category</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="mystery">Mystery</option>
          <option value="sci-fi">Science Fiction</option>
        </select>
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookInput;
