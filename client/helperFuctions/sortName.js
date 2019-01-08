function lastName(name) {
  return name.split(' ').pop();
}

function firstName(name) {
  return name.split(' ').shift();
}

function compareName(a, b) {
  if (a.charCodeAt(0) < b.charCodeAt(0)) {
    return -1;
  }
  else if (a.charCodeAt(0) > b.charCodeAt(0)) {
    return 1;
  }
  return 0;
}

//sorts by last name then first
export default function sortLstName(a, b) {
  let result = compareName(lastName(a), lastName(b));
  if (result === 0) {
    result = compareName(firstName(a), firstName(b));
  }
  return result;
}
