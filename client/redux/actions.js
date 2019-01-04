import axios from 'axios';
import 'babel-polyfill';

import { SET_BOOKS, SET_BOOKS_BY_AUTHOR, SET_BOOKS_BY_TITLE } from './constants';


const setBooks = (books) => ({
  type: SET_BOOKS,
  books
});

const setBooksByAuthor = (books) => ({
  type: SET_BOOKS_BY_AUTHOR,
  books
});

const setBooksByTitle = (books) => ({
  type: SET_BOOKS_BY_TITLE,
  books
});

//change this
export const fetchBooks = () => {
  return async (dispatch) => {
    const { data: books } = await axios.get('api/books');
    dispatch(setBooks(books));
  };
};

export const fetchBooksByAuthor = (author) => {
  const authorFormated = author.trim().replace(/ /g, '+');
  return async (dispatch) => {
    const { data: books } = await axios.get(`http://openlibrary.org/search.json?author=${authorFormated}`);
    dispatch(setBooksByAuthor(books));
  };
};

export const fetchBooksByTitle = (title) => {
  const titleFormated = title.trim().replace(/ /g, '+');
  return async (dispatch) => {
    const { data: books } = await axios.get(`http://openlibrary.org/search.json?title=${titleFormated}`);
    dispatch(setBooksByTitle(books));
  };
};
