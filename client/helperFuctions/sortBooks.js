import sortPubDate from '../helperFuctions/sortPubDate';

export default function sortBooks(books, sort) {
  let sortedBooks;
  if (sort === 'Publication data (older - newer)') {
    sortedBooks = [...books].sort( (a, b) => sortPubDate(a, b));
  }
  else {
    sortedBooks = [...books].sort( (a, b) => -sortPubDate(a, b, true));
  }
  return sortedBooks;

}

