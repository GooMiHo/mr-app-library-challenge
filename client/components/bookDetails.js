import React, { Component } from 'react';
import { connect } from 'react-redux';
import cnvrtLangCode from '../helperFuctions/langConverter';

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
      this.props.fetchLastBook(lastBook);
    }

  }

  render() {
    let book = this.props.book;
    return (
      <div className="book-dets-div">
        <button type="button" onClick={() => { this.props.history.push('/') }}>{`\u2715`}</button>
        <div className="title-info-div">
          <div>{BookImage(book, 'L')}</div>
          <div className="lrg-book-info">
            <h2>{book.title}</h2>
            <p>author {book.author_name ? book.author_name.join(', ') : 'unknown'}</p>
            <p>First published in {book.first_publish_year || 'unknown'}</p>
            <p><i>{book.publish_year ? `${book.publish_year.length} additions` : null}</i></p>
            <br />
            <h5>first sentence:</h5>
            <p>{book.first_sentence ? book.first_sentence[0] : 'unavailable'}</p>
          </div>
        </div>
        <h5 className="subj-title">subjects:</h5>
        <div className="sub-list">
          {book.subject ? book.subject.map((subj, i) => {
            return (
              <p key={`${book.subject}${subj}`}>
                {addLink('subjects', subj, book)}{i === book.subject.length - 1 ? ' ' : ', '}
              </p>
            );
          }) : 'N/A'
          }
        </div>
        <h5 className="pub-list-title">available in these languages:</h5>
        <div className="pub-list">
          {book.language ? book.language
          .map(lang => {
            return cnvrtLangCode(lang);
          })
          .join(', ') : 'N/A'
          }
        </div>
        <h5 className="pub-list-title">available from these publishers:</h5>
        <div className="pub-list">
          {book.publisher ? book.publisher.join(', ') : 'N/A'
          }
        </div>
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
    <a
      key={`type-${topic}`}
      href={`https://openlibrary.org/${type}/${topic}`}>{searchTopic}
    </a>
  );
}
