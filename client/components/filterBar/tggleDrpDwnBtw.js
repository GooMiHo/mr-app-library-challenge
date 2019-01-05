export default function toggleDropDwnBtn(id) {
  if (document.getElementById(id)) {
    let elements = document.getElementsByClassName('show');
    while (elements.length > 0) {
      elements[0].classList.remove('show');
    }

    document.getElementById(id).classList.toggle('show');
  }
}
