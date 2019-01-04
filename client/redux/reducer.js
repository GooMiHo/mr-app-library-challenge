import axios from 'axios';
import { SET_BOOKS, SET_BOOKS_BY_AUTHOR, SET_BOOKS_BY_TITLE } from './constants';

const reducer = (state = {books: []}, action) => {
  switch (action.type) {
    case SET_BOOKS || SET_BOOKS_BY_AUTHOR || SET_BOOKS_BY_TITLE:
      return { books: action.books };
    default:
      return state;
  }
};

export default reducer;
