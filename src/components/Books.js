import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksList } from '../redux/books/books';
import Book from './Book';

function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state);
  useEffect(() => {
    dispatch(getBooksList());
  }, [dispatch]);
  const list = books.reducer;
  return list.map((book) => (
    <Book book={book} key={book.id} />
  ));
}

export default Books;
