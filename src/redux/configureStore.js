/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './books/books';

const reducers = combineReducers({
  reducer,
  // additional reducers could be added here
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
