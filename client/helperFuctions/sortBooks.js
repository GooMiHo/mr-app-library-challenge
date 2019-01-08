import sortPubDate from '../helperFuctions/sortPubDate';

export default function sortBooks(books, sort) {
  let sortedBooks = [...books].sort( (a, b) => sortPubDate(a, b));
  return sortedBooks;

}

