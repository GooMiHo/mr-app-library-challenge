import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooksByTitle } from '../redux/actions';

import FilterBar from './filterBar/filterBar';
import SearchBar from './searchBar';
import filterBooks from '../helperFuctions/filterBooks';
import FilterList from './bookList/filterList';
import BookList from './bookList/index';
import SortMenu from './sortMenu';

class MainComp extends Component {

  constructor() {
    super();
    this.state = {
      filterTopics: {
      },
      sortChoice: '',
    };
    this.searchOnChange = this.searchOnChange.bind(this);
    this.handleAddFilter = this.handleAddFilter.bind(this);
    this.handleRmvFilter = this.handleRmvFilter.bind(this);
    this.handleAddSort = this.handleAddSort.bind(this);
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

  handleAddSort(choice) {
    if (this.state.sortChoice !== choice) {
      this.setState({ sortChoice: choice });
    }
    else {
      this.setState({ sortChoice: '' });
    }
  }

  render() {
    const booksNoFilt = this.props.books.docs;
    const filterTopics = this.state.filterTopics;
    const books = filterBooks(booksNoFilt, filterTopics);

    return (
      <div>
        <h1>Library App</h1>
        <div id="main-bar">
          <SearchBar searchOnChange={this.searchOnChange} />
          <FilterBar books={booksNoFilt} handleAddFilter={this.handleAddFilter} filterTopics={this.state.filterTopics} />
          <SortMenu handleAddSort={this.handleAddSort} />
          <FilterList filterTopics={filterTopics} handleRmvFilter={this.handleRmvFilter} />
        </div>
        <BookList books={books} sort={this.state.sortChoice} />
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

const Main = connect(mapStateToProps, mapDispatchToProps)(MainComp);
export default Main;
