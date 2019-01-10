import React from 'react';
import toggleDropDwnBtn from '../helperFuctions/tggleDrpDwnBtn';

const SortDropdown = ({ handleAddSort, books }) => {
  return (
    <div id="sort-outer-div" className="dropdown">
      {books ?
        <div>
          <button
            onClick={() => { toggleDropDwnBtn('sort') }}
            type="button"
            id="sort-btn"
            className="dropdown-btn">{`Sort `}
            <span
              className="click-arrow">{`\u25bc`}
            </span>
          </button>
          <div
            id="sort" className="dropdown-list" onClick={function (ev) {
              handleAddSort(ev.target.innerHTML);
            }}>
            <p className="sort-opt">Publication data (newer - older)</p>
            <p className="sort-opt">Publication data (older - newer)</p>
          </div>
        </div> : null}
    </div>
  );
};

export default SortDropdown;
