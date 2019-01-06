import cnvrtLangCode from '../helperFuctions/langConverter';

export default function filterBooks(books, filterTopics) {
  const topics = Object.keys(filterTopics);
  console.log('topics', topics)
  let filteredBooks = [];
  if (topics.length) {
    books.forEach(book => {
      hasTopic(book);
    });
    return filteredBooks;
  }
  else {
    return books;
  }


  function hasTopic(book) {
    topics.forEach(topic => {

      if (book[topic]) {
        book[topic].some(option => {
          if (topic === 'language') {
            option = cnvrtLangCode(option);
          }
          if (filterTopics[topic].includes(option)) {
            filteredBooks.push(book);
          }
        });
      }
    });
  }
}
