const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: 0, title: 'The Hunger Games', category: 'Action', author: 'Suzanne Collins',
  },
  {
    id: 1, title: 'Dune', category: 'Science Fiction', author: 'Frank Herbert',
  },
  {
    id: 2, title: 'Capital in the twenty-first century', category: 'Economy', author: 'Thomas Piketty',
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
