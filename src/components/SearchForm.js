import React from "react";

export default function SearchForm(props) {
  
 
  return (
    <div className="search-form">
      <form className="search">
          <input 
              type="text"
              onChange={props.handleInputChange}
              value={props.search}
              name="name"
              tabIndex="0"
              className="prompt search-name"
              placeholder="search by name"
              autoComplete="off"
            />
      </form>
    </div>
  );
}
