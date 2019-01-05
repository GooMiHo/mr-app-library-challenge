import React, {Component} from 'react';

export default class Main extends Component {
  render () {
    return (
      <div>
        <input type="input" />
        <div className="dropdown">
          <button type="button" className="dropdown-btn">laguage</button>
          <ul className="dropdown-list">
            {/* just a placeholer for now */}
            <li>english</li>
            <li>spanish</li>
            <li>french</li>
          </ul>
        </div>
      </div>
    );
  }
}

