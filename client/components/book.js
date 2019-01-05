import React from 'react';
import BookImage from '../helperFuctions/bookImage';

const Book = (props) => {
  const book = props.book;
  return (
    <div>
      <p>{book.title}</p>
      <div>{BookImage(book)}</div>
    </div>
  );
};

export default Book;
