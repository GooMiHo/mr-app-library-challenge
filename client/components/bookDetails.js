import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBookByKey } from '../redux/actions';
import BookImage from '../helperFuctions/bookImage';

class BookDetailsComp extends Component {

  componentDidMount() {
    const bookKey = this.props.match.params.bookKey;
    const books = this.props.books.docs;
    this.props.fetchBookByKey(bookKey, books);
  }

  render() {
    let book = this.props.book;
    return (
      <div>
        <button type="button" onClick={() => { this.props.history.push('/') }}>x</button>
        <div>{BookImage(book, 'L')}</div>
        <h1>{book.title}</h1>
        <p>
          <i>author {book.author_name ? book.author_name.join(', ') : 'N/A'}</i>
          <p>First published in {book.first_publish_year || 'N/A'}</p>
          <p><i>{book.publish_year ? book.publish_year.length : 'N/A'} additions</i></p>
        </p>
        <br />
        <p>{book.first_sentence}</p>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  fetchBookByKey: (bookKey, books) => dispatch(fetchBookByKey(bookKey, books))
});

const BookDetails = connect(mapStateToProps, mapDispatchToProps)(BookDetailsComp);
export default BookDetails;
