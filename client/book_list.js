import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooksByAuthor } from '../client/redux/actions';

class BookListComp extends Component {
  componentDidMount() {
    this.props.fetchBooksByAuthor('tolkien');
  }

  render() {
    //this.props.books.docs[0].title
    return (
      <div>
        <p>testing that this works</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { books: state.books }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBooksByAuthor: (author) => dispatch(fetchBooksByAuthor(author))
  });
}

const BookList = connect(mapStateToProps, mapDispatchToProps)(BookListComp);
export default BookList;
