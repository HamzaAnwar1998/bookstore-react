/* eslint-disable react/require-default-props */
import React from 'react';
import './css/Book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = ({ book }) => {
  const {
    id, title, author, category,
  } = book;
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteBook(id));
  };
  return (
    <main className="main-box container">
      <div className="book">
        <div className="genre">{category}</div>
        <div className="title">{title}</div>
        <div className="author">{author}</div>
        <div className="btns-box">
          <button
            className="action-btns"
            type="button"
          >
            Comments

          </button>
          <button
            className="action-btns"
            type="button"
            onClick={deleteHandler}
          >
            Remove

          </button>
          <button className="action-btns" type="button">Edit</button>
        </div>
      </div>
      <div className="circular-progress">Circular progress bar</div>
      <div className="chapter">Chapter</div>
    </main>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default Book;
