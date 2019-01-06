import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooksByTitle } from '../../redux/actions';

import Main from '../filterBar/filterBar';
import Book from './book';
import SearchBar from '../searchBar';
import filterBooks from '../../helperFuctions/filterBooks';
import FilteredList from './filteredList';

class BookListComp extends Component {

  constructor() {
    super();
    this.state = {
      filterTopics: {
      }
    };
    this.searchOnChange = this.searchOnChange.bind(this);
    this.handleAddFilter = this.handleAddFilter.bind(this);
    this.handleRmvFilter = this.handleRmvFilter.bind(this);
  }

  searchOnChange(searchVal) {
    this.props.fetchBooksByTitle(searchVal);
  }

  handleAddFilter(topic, topicOptions) {
    this.setState((prevState) => {
      let currentTopics = { ...prevState.filterTopics };
      if (currentTopics[topic] && !currentTopics[topic].includes(topicOptions)) {
        currentTopics[topic].push(topicOptions);
      }
      else {
        currentTopics[topic] = [topicOptions];
      }
      return { filterTopics: currentTopics };
    });
  }

  handleRmvFilter(topic, topicOptions) {
    this.setState((prevState) => {
      let currentTopics = { ...prevState.filterTopics };
      currentTopics[topic] = currentTopics[topic].filter(opt => {
        return opt !== topicOptions;
      });
      if (currentTopics[topic].length === 0) {
        delete currentTopics[topic];
      }
      return { filterTopics: currentTopics };
    });
  }

  render() {
    const booksNoFilt = this.props.books.docs;
    const filterTopics = this.state.filterTopics;
    const books = filterBooks(booksNoFilt, filterTopics);

    return (
      <div>
        <h1>Library App</h1>
        <div>
          <FilteredList filterTopics={filterTopics} handleRmvFilter={this.handleRmvFilter} />
        </div>
        <Main books={booksNoFilt} handleAddFilter={this.handleAddFilter} />
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
