import React, { Component } from 'react';
import getBookLangs from '../../helperFuctions/getBookLang';
import getTopicList from '../../helperFuctions/getTopicList';
import CategoryFilter from './categoryFilter';

export default class FilterBar extends Component {

  render() {
    const handleAddFilter = this.props.handleAddFilter;
    const books = this.props.books;
    let languages, authors, publishers;
    if (books) {
      languages = getBookLangs(books);
      authors = getTopicList(books, 'author_name');
      publishers = getTopicList(books, 'publisher');
    }
    return (
      <div id="filter-bar">
        {books ?
        <div>
          <CategoryFilter category={languages} title="language" idName="language" handleAddFilter={handleAddFilter} filterTopics={this.props.filterTopics} />
          <CategoryFilter category={authors} title="author" idName="author_name" handleAddFilter={handleAddFilter} filterTopics={this.props.filterTopics} />
          <CategoryFilter category={publishers} title="publisher" idName="publisher" handleAddFilter={handleAddFilter} filterTopics={this.props.filterTopics} />
        </div> : null}
      </div>
    );
  }
}

window.onclick = function (e) {
  if (!e.target.matches('.dropdown-btn')) {
    let list = document.getElementsByClassName('dropdown-list');
    for (let i = 0; i < list.length; i++) {
      let openDropdown = list[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
