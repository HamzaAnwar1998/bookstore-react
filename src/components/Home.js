import React from 'react';
import Navbar from './Navbar';
import Books from './Books';
import Form from './Form';

const Home = () => (
  <div className="wrapper">
    <Navbar />
    <Books />
    <Form />
  </div>
);

export default Home;
