export default function toggleFilter(books) {
  console.log(!!books)
  if (books) {
    const div = document.getElementById('filter-bar-div')
    if (div.style.display === 'none') {
      div.style.display = 'block';
    }
    else {
      div.style.display = 'none';
    }

    let elements = document.getElementsByClassName('dropdown');
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].style.display === 'none') {
        elements[i].style.display = 'block';
      }
      else {
        elements[i].style.display = 'none';
      }
    }
  }
  console.log(document.getElementById('filter-bar-div'))
  console.log(document.getElementsByClassName('dropdown'))
}
