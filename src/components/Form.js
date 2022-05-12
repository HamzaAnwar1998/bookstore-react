import React from 'react';

const Form = () => (
  <form className="container" style={{ marginBottom: `${50}px`, marginTop: `${50}px` }}>
    <h4 style={{ fontSize: `${24}px`, color: '#a9a9a9', marginBottom: `${15}px` }}>ADD NEW BOOK</h4>
    <div className="row">
      <div className="col-6">
        <input type="text" className="form-control" placeholder="First name" />
      </div>
      <div className="col-3">
        <input type="text" className="form-control" placeholder="Last name" />
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

export default Form;
