import React, { Component } from 'react';
import getBookLangs from '../helperFuctions/getBookLang';
import getTopicList from '../helperFuctions/getTopicList';
import CategoryFilter from './filterBar/categoryFilter';

export default class Main extends Component {

  render() {
    const handleAddFilter = this.props.handleAddFilter;
    let languages, authors, publishers;
    if (this.props.books) {
      languages = getBookLangs(this.props.books);
      authors = getTopicList(this.props.books, 'author_name');
      publishers = getTopicList(this.props.books, 'publisher');
    }
    return (
      <div>
        <CategoryFilter category={languages} title="language" idName="language" handleAddFilter={handleAddFilter} />
        <CategoryFilter category={authors} title="author" idName="author_name" handleAddFilter={handleAddFilter} />
        <CategoryFilter category={publishers} title="publisher" idName="publisher" handleAddFilter={handleAddFilter} />
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
