import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooksByTitle } from '../redux/actions';

import FilterBar from './filterBar/filterBar';
import SearchBar from './searchBar';
import filterBooks from '../helperFuctions/filterBooks';
import FilterList from './bookList/filterList';
import BookList from './bookList/index';
import SortDropdown from './sortDropdown';
import ListFooter from './bookList/list-footer';

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
        <div className="links-div">
          <a href="https://www.linkedin.com/in/bethany-m-walker/">
            <img
              src="https://i.ibb.co/xDt8dsc/linkedin-btn.png"
              className="linkedin-btn"
              alt="linkedin button"
              border="0"
              value="Go to Bethany's linked page"
            />
          </a>
          <a href="https://github.com/GooMiHo/mr-app-library-challenge/">
            <img
              src="https://i.ibb.co/0KTzqyX/github-btn.png"
              className="github-btn"
              alt="github button"
              border="0"
              value="Go to Bethany's github"
            />
          </a>
        </div>
        <h1>Book Finder</h1>
        <div id="banner">
          <SearchBar searchOnChange={this.searchOnChange} />
          <div id="filt-and-sort">
            <FilterBar books={booksNoFilt} handleAddFilter={this.handleAddFilter} filterTopics={this.state.filterTopics} />
            <SortDropdown handleAddSort={this.handleAddSort} books={booksNoFilt} />
          </div>
        </div>
        <div className="filter-list">
          <FilterList filterTopics={filterTopics} handleRmvFilter={this.handleRmvFilter} />
        </div>
        <div>
          <BookList books={books} sort={this.state.sortChoice} />
        </div>
        <ListFooter books={books} />
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

