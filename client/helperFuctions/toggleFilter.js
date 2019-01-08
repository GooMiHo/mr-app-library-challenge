export default function toggleFilter(books) {
  let elements = document.getElementsByClassName('dropdown');
  if (elements) {
    for (var i = 0; i < elements.length; i++) {
      if (books) elements[i].style.display = 'block';
      else elements[i].style.display = 'none';
    }
  }
}
