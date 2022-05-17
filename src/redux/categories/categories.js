const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = [];

export const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

const checkStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return 'under construction';
    default:
      return state;
  }
};

export default checkStatusReducer;
