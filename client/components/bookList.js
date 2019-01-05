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
      filterTopics: [],
      filteredBooks: [],
      value: 1
    };
    this.searchOnChange = this.searchOnChange.bind(this);
    this.handleAddFilter = this.handleAddFilter.bind(this);
  }

  searchOnChange(searchVal) {
    this.setState({ searchVal });
    this.props.fetchBooksByTitle(searchVal);
  }

  handleAddFilter(filterTopic) {
    this.setState((prevState) => {
      let currentTopics = [...prevState.filterTopics];
      if (!currentTopics.includes(filterTopic)) {
        currentTopics.push(filterTopic);
      }
      return {filterTopics: currentTopics};
    });
  }

  render() {
    const books = this.props.books.docs;

    return (
      <div>
        <Main books={books} handleAddFilter={this.handleAddFilter}/>
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
