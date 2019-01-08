export default function getFilteredList(filterTopics) {
  let allFilters = [];
  const topics = Object.keys(filterTopics);
  topics.map(topic => {
    return filterTopics[topic].map(option => {
      allFilters.push(option)
    });
  })
  return allFilters;
}
