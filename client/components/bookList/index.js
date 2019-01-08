import React from 'react';
import Book from './book';
import sortBooks from '../../helperFuctions/sortBooks';
import { Link } from 'react-router-dom';
import toggleFilter from '../../helperFuctions/toggleFilter';

export default function BookList({ books, sort, history }) {
  if (books && books.length >= 1 && sort !== '') {
    books = sortBooks(books, sort);
  }
  toggleFilter(books);

  return (
    <div>
      {!books ?
        <h4>Please search for a book by title to view results</h4> :
        !books.length ?
          <h4>There are no books matching these requirements</h4> :
          books.map(book => {
            let key = book.key.slice(7);
            return (
              <div key={book.key} >
                <Link key={book.key} to={`/book/${key}`}>
                  <Book book={book} />
                </Link>
              </div>
            );
          })
      }
    </div>
  );
}
