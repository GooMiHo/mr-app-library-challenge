import React from 'react';

const ListFooter = ( {books} ) => {
  const booksExist = books && books.length;
  const footerClassNm = booksExist ? 'list-footer' : 'no-list-footer';
  return (
    <footer>
      <p className={footerClassNm}>data and images from<a href="https://openlibrary.org/dev/docs/api/books"> Open Library Books API</a>
      </p>
    </footer>
  );
};

export default ListFooter;

