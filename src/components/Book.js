/* eslint-disable react/require-default-props */
import React from 'react';
import './css/Book.css';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { title, genre, author } = book;
  return (
    <main className="main-box container">
      <div className="book">
        <div className="genre">{genre}</div>
        <div className="title">{title}</div>
        <div className="author">{author}</div>
        <div className="btns-box">
          <button className="action-btns" type="button">Comments</button>
          <button className="action-btns" type="button">Remove</button>
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
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
};

export default Book;
