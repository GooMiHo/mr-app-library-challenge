import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './redux/store';
import Main from './components/main';
import BookDetails from './components/bookDetails';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/book/:bookKey" component={BookDetails} />
        </div>
      </BrowserRouter>
    </Provider>
  </div>,
  document.getElementById('app')
);




=====================


import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBookByKey, fetchLastBook } from '../redux/actions';
import BookImage from '../helperFuctions/bookImage';

class BookDetailsComp extends Component {

  componentDidMount() {
    const bookKey = this.props.match.params.bookKey;
    const books = this.props.books.docs;
    if (books) {
      this.props.fetchBookByKey(bookKey, books);
    }
    else {
      const lastBook = JSON.parse(localStorage.getItem('book'));
      console.log('lastBook', lastBook);
      this.props.fetchLastBook(lastBook);
    }

  }

  render() {
    let book = this.props.book;
    return (
      <div>
        <button type="button" onClick={() => { this.props.history.push('/') }}>x</button>
        <div>{BookImage(book, 'L')}</div>
        <h1>{book.title}</h1>
        <p>author {book.author_name ? book.author_name.join(', ') : 'N/A'}</p>
        <p>First published in {book.first_publish_year || 'N/A'}</p>
        <p><i>{book.publish_year ? book.publish_year.length : 'N/A'} additions</i></p>
        <br />
        <p>{book.first_sentence}</p>
        <h5>subjects:</h5>
        <p>
          {book.subject ? book.subject.map((subj, i) => {
            return (
              <p key={`${book.subject}${subj}`}>
                {addLink('subjects', subj, book)}{i === book.subject.length - 1 ? ' ' : ', '}
              </p>
            );
          }) :
            'N/A'}
        </p>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  fetchBookByKey: (bookKey, books) => dispatch(fetchBookByKey(bookKey, books)),
  fetchLastBook: (book) => dispatch(fetchLastBook(book))
});

const BookDetails = connect(mapStateToProps, mapDispatchToProps)(BookDetailsComp);
export default BookDetails;

function addLink(type, topic, book) {
  let searchTopic = topic.slice().replace(/ /g, '_');
  localStorage.setItem('book', JSON.stringify(book));

  return (
    <a key={`type-${topic}`} href={`https://openlibrary.org/${type}/${topic}`}>{searchTopic}</a>
  );
}
