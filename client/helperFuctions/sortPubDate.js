export default function sortPubDate(a, b) {
  if (!a.first_publish_year || !b.first_publish_year) {
    return compareUndef(a, b);
  }
  return a.first_publish_year - b.first_publish_year;
}

function compareUndef(a, b) {
  if (!a.first_publish_year && !b.first_publish_year) {
    return 0;
  }
  else if (!a.first_publish_year) {
    return 1;
  }
  else {
    return -1;
  }
}
