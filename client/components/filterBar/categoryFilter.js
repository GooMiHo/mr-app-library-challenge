import React from 'react';
import toggleDropDwnBtn from '../../helperFuctions/tggleDrpDwnBtn';
import getFilterList from '../../helperFuctions/getFilterList';

const CategoryFilter = (props) => {
  const category = props.category;
  const handleAddFilter = props.handleAddFilter;
  const fiteredList = getFilterList(props.filterTopics);

  return (
    <div className="dropdown">
      <button onClick={() => { toggleDropDwnBtn(props.idName) }} type="button" className="dropdown-btn">{`${props.title} \u25bc`}</button>
      {category ? (
        <div
          id={props.idName} className="dropdown-list" onClick={function (ev) {
            if (!fiteredList.includes(ev.target.innerHTML)) {
              handleAddFilter(props.idName, ev.target.innerHTML);
            }
          }}>
          {
            category.map(author => {
              return <p key={author}>{author}</p>;
            })
          }
        </div>) : null}
    </div>
  );
};

export default CategoryFilter;
