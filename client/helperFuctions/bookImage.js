import React from 'react';
import image2Failed from './ranMultiTimes';

// The below function checks which kind of image key exhists, which can be ISBN, LCCN, or OCLC.

//Only 2 images are attempted before a default image is used because documentation says:
// Currently only 100 requests/IP are allowed for every 5 minutes. If any IP tries to access more that the allowed limit, the service will return "403 Forbidden" status.

//Takes a book as the first argument, and 'S' for a small image or 'L' for a large image
//default is a medium size image;

export default function BookImage(book, size) {
  size = size || 'M';
  let imgSizeClass = 'med-img';
  if (size) imgSizeClass = size === 'L' ? 'large-img' : 'small-img';

  const bookImg = book.isbn || book.lccn || book.oclc || null;
  if (bookImg) {

    return (
      <img
        className={imgSizeClass}
        src={`https://covers.openlibrary.org/b/isbn/${bookImg[0]}-${size}.jpg?default=false`}
        onError={(e) => {
          e.target.onerror = null; e.target.src = image2Failed() || !bookImg[1] ?
            'https://i.ibb.co/MBtx88j/book-img-not-available.png'
            : `https://covers.openlibrary.org/b/isbn/${bookImg[1]}-${size}.jpg?default=false`;
        }}
        alt="book cover image"
      />
    );
  }
  else {
    return (
      <img
        className={imgSizeClass}
        src="https://i.ibb.co/MBtx88j/book-img-not-available.png"
        alt="book cover image"
      />
    );
  }

}
