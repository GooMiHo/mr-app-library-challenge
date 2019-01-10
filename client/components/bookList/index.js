import React from 'react';
import Book from './book';
import sortBooks from '../../helperFuctions/sortBooks';
import { Link } from 'react-router-dom';

export default function BookList({ books, sort }) {
  if (books && books.length >= 1 && sort !== '') {
    books = sortBooks(books, sort);
  }
  console.log('books && books.length < 3 :', books && books.length < 3)

  return (
    <div id="outer-booklist-div">
      <div className={books && books.length < 3 && books.length !== 0 ?
        'book-list short-book-list' :
        'book-list'}>
        {!books ?
          <div className="book-list-txt">
            <h4>Please search for a book by title to view results</h4>
          </div> :
          !books.length ?
            <div className="book-list-txt">
              <h4>There are no books matching these requirements</h4>
            </div> :
            books.map(book => {
              let key = book.key.slice(7);
              return (
                <Link key={book.key} to={`/book/${key}`} >
                  <Book book={book} />
                </Link>
              );
            })
        }
      </div>
    </div>
  );
}
