import React from "react";

function Search({searchText, setSearchText}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id={searchText}
        placeholder="Type a name to search..."
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

export default Search;
