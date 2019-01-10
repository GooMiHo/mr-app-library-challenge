# Book Finder

_Coding Exercise_

Book Finder can be demoed at https://library-challenge.herokuapp.com/

This web application was designed following the criteria of the `Mr App Library Challenge` found at https://gist.github.com/gooptaa/b5bf13cbd4c7b00bfacd7d0335423cb2

## Features

The Book Finder app allows the user to search for books based on title.

Books found by title can be further filtered by:
* language
* authors last name
* publisher
A list of the selected filters will appear as they are added. Each filter added can be removed by clicking the `x` next to the corresponding filter.

Books can also be sorted by:
* Publication date (new - old)
* Publication date (old-new)

Upon clicking on a book, further information can be gathered, and a larger image displayed.

### Extras
Hyperlinks were added to the list of given subjects, which will take the user to the Open Library page that suggests books based on that subject. The user can return to the previously viewed page with the assistance of local storage.

## Design
This app has responsive design. Resize your screen! **Try it on your phone!**

## Technologies

`HTML`, `CSS`, `React`, and `Redux` were used to build this site's front end. `Express` was use for the backend. The app is available online through `Heroku`.

All book data was retrieved through the **Open Library Books API** (https://openlibrary.org/dev/docs/api/books).


## Implementation

* The **redux** store keeps track of `books`, a full list of books found by title, and `book`, the most recently clicked book.

* The main **react** component also keeps track of a local state that includes `filterTopics` and `sortChoice`.

  * `filterTopics` keeps track of a list of all the chosen filters selected. It is used to:
    * filter the list of books
    * display a list of what filters were selected

  * `sortChoice` keeps track of which sort is turned on, if any. It determines how the list is sorted.

* **Local storage** is used to store `book`, the most recently viewed book. If the user clicks on a hyperlink leaving the app site, the book info is stored. Upon hitting the back button, the data is retrieved from local storage and used to repopulate the page.
