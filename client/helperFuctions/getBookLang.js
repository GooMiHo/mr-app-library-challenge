import cnvrtLangCode from './langConverter';

export default function getBookLangs(books) {
  let allLang = [];
  books.forEach(book => {
    if (book.language) {
      book.language.forEach(lang => {
        allLang.push(lang);
      });
    }
  });
  const unique = allLang.sort().filter((prev, i, product) => !i || prev !== product[i - 1]);
  const languages = [];
  unique.forEach(lang => {
    const convertedLang = cnvrtLangCode(lang);
    if (convertedLang) {
      languages.push(convertedLang);
    }
  });
  return languages;
}
