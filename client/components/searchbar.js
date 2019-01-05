import React from 'react';

const SearchBar = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchOnChange(e.target.value);
  };
  return (
    <form className="search" onSubmit={handleSubmit} >
      <div>
        <input onChange={e => handleSubmit(e)} name="searchVal" type="text" placeholder="Search by title" />
      </div>

    </form>
  );
};

export default SearchBar;
