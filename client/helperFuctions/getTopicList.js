export default function getTopicList(books, topicType) {
  let allOptions = [];
  books.forEach(book => {
    if (book[topicType]) {
      book[topicType].forEach(option => {
        allOptions.push(option);
      });
    }
  });
  const uniqOptions = allOptions.sort().filter((prev, i, opt) => !i || prev !== opt[i - 1]);
  return uniqOptions;
}
