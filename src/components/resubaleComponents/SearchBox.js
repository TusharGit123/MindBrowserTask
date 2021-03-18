import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="main-searchbox">
      <i className="fa fa-search" aria-hidden="true"></i>
      <input
        type="text"
        placeholder="search by name, email"
        className="search-inputbox"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
