import React from 'react';
import Book from './Book';

const Books = ({ books }) => books.map((book) => (
  <Book book={book} key={book.id} />
));

export default Books;
