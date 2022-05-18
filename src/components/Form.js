import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newBook = {
      id,
      title,
      author,
      category,
    };
    dispatch(postBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };
  return (
    <form
      className="container"
      style={{ marginBottom: `${50}px`, marginTop: `${50}px` }}
      onSubmit={handleSubmit}
    >
      <h4 style={{ fontSize: `${24}px`, color: '#a9a9a9', marginBottom: `${15}px` }}>ADD NEW BOOK</h4>
      <div className="row">
        <div className="col-3">
          <input
            type="text"
            className="form-control"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-3">
          <input
            type="text"
            className="form-control"
            placeholder="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="col-3">
          <input
            type="text"
            className="form-control"
            placeholder="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="col-3">
          <button
            type="submit"
            className="btn btn-primary btn-md"
            style={{ width: `${100}%` }}
          >
            ADD BOOK

          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
