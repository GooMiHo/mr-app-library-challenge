import axios from 'axios';
import { SET_BOOKS_BY_TITLE, SELECT_BOOK } from './constants';

const reducer = (state = { books: {},  book: {}  }, action) => {
  switch (action.type) {
    case SET_BOOKS_BY_TITLE:
      return { ...state, books: action.books };
    case SELECT_BOOK:
      return { ...state, book: action.book };
    default:
      return state;
  }
};

export default reducer;
