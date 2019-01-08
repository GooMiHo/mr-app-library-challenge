export default function sortBooks(books, sort, filter) {

  let booksWithYear = books.filter(book => book.first_publish_year);
  let booksNoYear = books.filter(book => !book.first_publish_year);

  let sortedBooks = booksWithYear.sort((a, b) => {
    return a.first_publish_year - b.first_publish_year;
  });

  return sortedBooks.concat(booksNoYear);
}

