import { cnvrtToCode } from '../helperFuctions/langConverter';

export default function filterBooks(books, filterTopics) {
  const topics = Object.keys(filterTopics);
  let filteredBooks = books;
  if (topics.length) {
    topics.forEach(topic => {
      filteredBooks = filteredBooks.filter(book => {
        return filterTopics[topic].some(option => {

          if (topic === 'language') {
            option = cnvrtToCode(option);
          }

          return book[topic] && book[topic].includes(option);
        });
      });
    });
  }
    return filteredBooks;
}
