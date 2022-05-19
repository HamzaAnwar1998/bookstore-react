/* eslint-disable react/self-closing-comp */
/* eslint-disable react/require-default-props */
import React from 'react';
import './css/Book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Progressbar from 'react-js-progressbar';
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
      <div className="circular-progress">
        <div className="progress">
          <Progressbar
            input={50}
            pathWidth={10}
            pathColor="#0491ff" // use an array for gradient color.
            trailWidth={20}
            trailColor="#e4e4e4" // use a string for solid color.
            customText=""
          />
        </div>
        <div className="content">
          <h3 className="number">50%</h3>
          <p className="string">Completed</p>
        </div>
      </div>
      <div className="chapter">
        <div className="current-chap">CURRENT CHAPTER</div>
        <p className="chap-no">Chapter 17</p>
        <button type="button" className="btn btn-primary btn-sm">UPDATE</button>
      </div>
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
