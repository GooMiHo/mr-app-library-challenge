import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooksByTitle } from '../redux/actions';

import Main from './main';
import Book from './book';
import SearchBar from './searchBar';

class BookListComp extends Component {

  constructor() {
    super();
    this.state = {
      searchVal: '',
      filteredBooks: []  //use or remove
    };
    this.searchOnChange = this.searchOnChange.bind(this);
  }

  searchOnChange(searchVal) {
    this.setState({ searchVal });
    this.props.fetchBooksByTitle(searchVal);
  }

  render() {
    const books = this.props.books.docs;
    return (
      <div>
        <Main books={books} />
        <SearchBar searchOnChange={this.searchOnChange} />
        <div>
          {!books ?
            <h4>There are no books matching this title</h4> :
            books.map(book => {
              return <Book key={book.key} book={book} />;
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { books: state.books };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBooksByTitle: (title) => dispatch(fetchBooksByTitle(title))
  });
};

const BookList = connect(mapStateToProps, mapDispatchToProps)(BookListComp);
export default BookList;
