import React from 'react';

const SearchBar = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchOnChange(e.target.searchVal.value);
  };
  return (
    <form className="search" onSubmit={e => handleSubmit(e)} autoComplete="off">
        <input name="searchVal" type="text" placeholder="Search by title" required />
        <button className="search-btn" type="submit" >
          <img src="https://i.ibb.co/Ctd7KQd/search-glass.png" alt="search glass button" />
        </button>
    </form>
  );
};

export default SearchBar;
