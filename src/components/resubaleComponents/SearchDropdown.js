import React, { useRef, useEffect } from "react";

const SearchDropdown = ({ options, onInputChange }) => {
  const ulRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.addEventListener("click", (event) => {
      event.stopPropagation();
      ulRef.current.style.display = "flex";
      onInputChange = event;
    });
    document.addEventListener("click", (event) => {
      ulRef.current.style.display = "none";
    });
  }, []);
  return (
    <>
      <div className="search-bar-dropdown">
        <input
          id="search-bar"
          type="text"
          placeholder="Search for college"
          className="form-control"
          onChange={onInputChange}
          ref={inputRef}
        />
        <ul id="result" className="list-group ul-list" ref={ulRef}>
          {options.map((option, index) => {
            return (
              <button
                type="button"
                className="list-group-item list-group-item-action"
                key={index}
                onClick={(e) => {
                  inputRef.current.value = option;
                }}
              >
                {option.name}
              </button>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SearchDropdown;
