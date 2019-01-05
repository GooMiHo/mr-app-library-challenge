import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooksByTitle } from '../redux/actions';

import Main from './main';
import Book from './book';
import SearchBar from './searchBar';
import filterBooks from '../helperFuctions/filterBooks';

class BookListComp extends Component {

  constructor() {
    super();
    this.state = {
      filterTopics: {}
    };
    this.searchOnChange = this.searchOnChange.bind(this);
    this.handleAddFilter = this.handleAddFilter.bind(this);
    this.handleRemoveFilter = this.handleRemoveFilter.bind(this);
  }

  searchOnChange(searchVal) {
    this.props.fetchBooksByTitle(searchVal);
  }

  handleAddFilter(topic, topicOptions) {
    this.setState((prevState) => {
      let currentTopics = { ...prevState.filterTopics };
      currentTopics[topic] ? currentTopics[topic].push(topicOptions) : currentTopics[topic] = [topicOptions];
      return { filterTopics: currentTopics };
    });
  }

  handleRemoveFilter(topic, topicOptions) {
    this.setState((prevState) => {
      let currentTopics = { ...prevState.filterTopics };
      currentTopics[topic] = currentTopics[topic].filter(opt => opt !== topicOptions);
      return { filterTopics: currentTopics };
    });
  }

  render() {
    const books = this.props.books.docs;
    let booksWFilter;
    const filterTopics = this.state.filterTopics;
    const topics = Object.keys(filterTopics);

    if (books && filterTopics) {
      booksWFilter = filterBooks(books, filterTopics);
    }

    return (
      <div>
        <div>
          { topics.map(topic => {
              return filterTopics[topic].map(option => {
                console.log('topic', option);
                return <p key={option}>{option} <a>x</a></p>;
              });
            })
          }
        </div>
        <Main books={books} handleAddFilter={this.handleAddFilter} />
        <SearchBar searchOnChange={this.searchOnChange} />
        <div>
          {!booksWFilter ?
            <h4>There are no books matching this title</h4> :
            booksWFilter.map(book => {
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
