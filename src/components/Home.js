import React, { useState } from 'react';
import Navbar from './Navbar';
import Books from './Books';
import Form from './Form';

const Home = () => {
  const [books] = useState([
    {
      id: 0, title: 'The Hunger Games', genre: 'Action', author: 'Suzanne Collins',
    },
    {
      id: 1, title: 'Dune', genre: 'Science Fiction', author: 'Frank Herbert',
    },
    {
      id: 2, title: 'Capital in the twenty-first century', genre: 'Economy', author: 'Thomas Piketty',
    },
  ]);

  return (
    <div className="wrapper">
      <Navbar />
      <Books books={books} />
      <Form />
    </div>
  );
};

export default Home;
