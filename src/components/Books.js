// import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

// const Books = ({ books }) => books.map((book) => (
//   <Book book={book} key={book.id} />
// ));
function Books() {
  const books = useSelector((state) => state);

  const list = books.reducer;
  return list.map((book) => (
    <Book book={book} key={book.id} />
  ));
}

export default Books;
