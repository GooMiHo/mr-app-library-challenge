import axios from 'axios';

const GOT_BOOKS = 'GOT_BOOKS';
const GOT_BOOKS_BY_AUTHOR = 'GOT_BOOKS_BY_AUTHOR';
const GOT_BOOKS_BY_TITLE = 'GOT_BOOKS_BY_TITLE';

const gotBooks = (books) => ({
  type: GOT_BOOKS,
  books
});

const gotBooksByAuthor = (booksByAuthor) => ({
  type: GOT_BOOKS_BY_AUTHOR,
  booksByAuthor
});

const gotBooksByTitle = (booksByTitle) => ({
  type: GOT_BOOKS_BY_TITLE,
  booksByTitle
});

//change this
export const fetchBooks = () => {
  return async (dispatch) => {
    const { data: books } = await axios.get('api/books');
    dispatch(gotBooks(books));
  };
};

export const fetchBooksByAuthor = (author) => {
  const authorFormated = title.trim().replace(/ /g, '+');
  return async (dispatch) => {
    const { data: books } = await axios.get(`http://openlibrary.org/search.json?author=${authorFormated}`);
    dispatch(gotBooksByAuthor(books));
  };
};

export const fetchBooksByTitle = (title) => {
  const titleFormated = title.trim().replace(/ /g, '+');
  return async (dispatch) => {
    const { data: books } = await axios.get(`http://openlibrary.org/search.json?title=${titleFormated}`);
    dispatch(gotBooksByTitle(books));
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GOT_BOOKS:
      return action.books;
    default:
      return state;
  }
};

export default reducer;
