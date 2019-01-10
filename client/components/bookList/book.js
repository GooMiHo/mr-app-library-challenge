import React from 'react';
import BookImage from '../../helperFuctions/bookImage';

const Book = (props) => {
  const book = props.book;
  return (
    <div className="small-book">
      <div>{BookImage(book, 'S')}</div>
      <p>{book.title} ({book.first_publish_year || <i>n/a</i>})</p>
      <p><i>{book.author_name ? book.author_name.join(', ') : 'unknown'}</i></p>
    </div>
  );
};

export default Book;
