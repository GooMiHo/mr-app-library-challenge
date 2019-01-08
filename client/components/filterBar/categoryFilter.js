import React from 'react';
import toggleDropDwnBtn from '../../helperFuctions/tggleDrpDwnBtn';


const CategoryFilter = (props) => {
  const category = props.category;
  const handleAddFilter = props.handleAddFilter;
  return (
    <div className="dropdown">
      <button onClick={() => { toggleDropDwnBtn(props.idName) }} type="button" className="dropdown-btn">{`${props.title} \u25bc`}</button>
      {category ? (
        <div
          id={props.idName} className="dropdown-list" onClick={function (ev) {
            handleAddFilter(props.idName, ev.target.innerHTML);
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
