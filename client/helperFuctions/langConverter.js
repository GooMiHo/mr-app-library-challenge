import iso6392 from 'iso-639-2';
// for more info on iso6392 go to https://www.npmjs.com/package/iso-639-2

export default function cnvrtLangCode(langCode) {
  for (var i = 0; i < iso6392.length; i++) {
    if (iso6392[i].iso6392B === langCode) {
      return iso6392[i].name;
    }
  }
}

export function cnvrtToCode(lang) {
  for (var i = 0; i < iso6392.length; i++) {
    if (iso6392[i].name === lang) {
      return iso6392[i].iso6392B;
    }
  }
}
