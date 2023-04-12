/* This is Homepage */

import React from 'react';

import BookList from '../BookList';
import AddNewBook from '../AddNewBook';

function Books() {
  return (
    <main>
      <BookList />
      <AddNewBook />
    </main>
  );
}
export default Books;
