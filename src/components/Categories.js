import React from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatus('under construction'));
  };
  return (
    <div className="wrapper">
      <Navbar />
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handleStatus}
      >
        Check Status

      </button>
      <h5>This page is under construction</h5>
    </div>
  );
};

export default Categories;
