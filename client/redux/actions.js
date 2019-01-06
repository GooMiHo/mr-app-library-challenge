import axios from 'axios';
import { SET_BOOKS_BY_TITLE } from './constants';

const setBooksByTitle = (books) => ({
  type: SET_BOOKS_BY_TITLE,
  books
});

export const fetchBooksByTitle = (title) => {
  const titleFormated = title.trim().replace(/ /g, '+');
  return async (dispatch) => {
    const { data: books } = await axios.get(`https://openlibrary.org/search.json?title=${titleFormated}`);
    dispatch(setBooksByTitle(books));
  };
};
