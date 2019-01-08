import axios from 'axios';
import { SET_BOOKS_BY_TITLE, SELECT_BOOK } from './constants';

const setBooksByTitle = (books) => ({
  type: SET_BOOKS_BY_TITLE,
  books
});

const setBook = (book) => {
  return { type: SELECT_BOOK, book};
}


export const fetchBookByKey = (key, books) => {
  return (dispatch) => {
    const book = books.filter(b => b.key === `/works/${key}`)[0];
    dispatch(setBook(book));
  };
};

export const fetchLastBook = (book) => {
  return (dispatch) => {
    dispatch(setBook(book));
  };
};

export const fetchBooksByTitle = (title) => {
  const titleFormated = title.trim().replace(/ /g, '+');
  return async (dispatch) => {
    const { data: books } = await axios.get(`https://openlibrary.org/search.json?title=${titleFormated}`);
    dispatch(setBooksByTitle(books));
  };
};

