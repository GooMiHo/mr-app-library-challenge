import React from 'react';

const SearchBar = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchOnChange(e.target.searchVal.value);
  };
  return (
    <form className="search" onSubmit={e => handleSubmit(e)} >
        <input name="searchVal" type="text" placeholder="Search by title" />
        <button type="submit">search</button>
    </form>
  );
};

export default SearchBar;
