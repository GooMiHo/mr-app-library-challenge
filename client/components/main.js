import React, { Component } from 'react';
import getBookLangs from '../helperFuctions/getBookLang';

export default class Main extends Component {
  render() {
    let languages;
    if (this.props.books) {
      languages = getBookLangs(this.props.books);
    }

    return (
      <div>
        <div className="dropdown">
          <button onClick={() => { toggleDropDwnBtn('lang-dropdown') }} type="button" className="dropdown-btn">language</button>
          {languages ? (
            <div id="lang-dropdown" className="dropdown-list">
              {
                languages.map(language => {
                  return <p key={language} value={language}>{language}</p>;
                })
              }
            </div>) : null}
        </div>
      </div>
    );
  }
}

function toggleDropDwnBtn(id) {
  if(  document.getElementById(id)) {
    document.getElementById(id).classList.toggle('show');
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
