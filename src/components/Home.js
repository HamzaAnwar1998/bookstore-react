import React from 'react';
import Navbar from './Navbar';
import Books from './Books';
import Form from './Form';

const Home = () => (
  <div className="wrapper">
    <Navbar />
    <div className="books-and-form">
      <Books />
      <div className="line container" />
      <Form />
    </div>
  </div>
);

export default Home;
