import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooksByTitle } from '../../client/redux/actions';
import Book from './book';
import SearchBar from './searchbar';

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
