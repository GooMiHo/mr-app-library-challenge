import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooksByTitle } from '../redux/actions';

import Main from './main';
import Book from './book';
import SearchBar from './searchBar';
import filterBooks from '../helperFuctions/filterBooks';
import RmvFiltBtn from './rmvFiltBtn';

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
      currentTopics[topic] ? currentTopics[topic].push(topicOptions) : currentTopics[topic] = [topicOptions];
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
      console.log('currentTopics', currentTopics);
      return { filterTopics: currentTopics };
    });
  }

  render() {
    const booksNoFilt = this.props.books.docs;
    const filterTopics = this.state.filterTopics;
    const topics = Object.keys(filterTopics);
    const books = filterBooks(booksNoFilt, filterTopics);

    return (
      <div>
        <div>
          {topics.map(topic => {
            return filterTopics[topic].map(option => {
              return (
                <div key={option}>
                  <p>{option}</p><RmvFiltBtn handleRmvFilter={this.handleRmvFilter} topic={topic} option={option}/>
                </div>
              );
          });
          })
        }
        </div>
        <h1>Test!!</h1>
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
