import React from 'react';
import Book from './book';
import sortBooks from '../../helperFuctions/sortBooks';

export default function BookList({ books, sort, filter }) {
  console.log('sort: ', sort)
  if (books && books.length >= 1 && sort === 'Publication data (older - newer)') {
    console.log('laal')
    books = sortBooks(books, sort, filter);
  }
  console.log(books)

  return (
    <div>
      {!books ?
        <h4>Please search for a book by title to view results</h4> :
        !books.length ?
          <h4>There are no books matching this title</h4> :
          books.map(book => {
            return <Book key={book.key} book={book} />;
          })
      }
    </div>
  );
}
