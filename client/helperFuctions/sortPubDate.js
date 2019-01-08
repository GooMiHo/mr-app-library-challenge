export default function sortPubDate(a, b, reverse) {
  if (!a.first_publish_year || !b.first_publish_year) {
    return compareUndef(a, b, reverse);
  }
  return a.first_publish_year - b.first_publish_year;
}

//compareUndef adds books with an undefined year to the end of the search
//adding true as a 3rd argument keeps undefined years to the end when search is reversed

function compareUndef(a, b, reverse) {
  let result = -1;
  if (!a.first_publish_year && !b.first_publish_year) {
    result = 0;
  }
  else if (!a.first_publish_year) {
    result = 1;
  }
  return reverse ? -result : result;
}
