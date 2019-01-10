import React from 'react';
import BookImage from '../../helperFuctions/bookImage';

const Book = (props) => {
  const book = props.book;
  return (
    <div className="small-book">
      <div className="smll-book-inner">
        <h3 id="small-title">{book.title}</h3>
        <div className="img-info-div">
          {BookImage(book, 'S')}
          <div className="smll-info-div">
            <p><i>{book.author_name ? book.author_name.join(', ') : 'unknown'}</i></p>
            <p>first published in: {book.first_publish_year || <i>unknown</i>}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
