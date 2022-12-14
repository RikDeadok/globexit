import React from 'react';
import './headers.scss';

function Header({ setSearchInput }) {
  function inputHandleChange(event) {
    setSearchInput(event.target.value);
  }

  return (
    <form className="search">
      <input className="search__input" type="text" id="search-input" onChange={inputHandleChange} />
      <label className="search__label" htmlFor="search-input">
        <span className="_icon-search" />
      </label>
    </form>
  );
}
export default Header;
