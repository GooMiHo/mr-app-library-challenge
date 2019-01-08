import React from 'react';
import Book from './book';
import sortBooks from '../../helperFuctions/sortBooks';

export default function BookList({ books, sort }) {
  if (books && books.length >= 1 && sort !== '') {
    books = sortBooks(books, sort);
  }

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
