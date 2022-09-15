import React from "react";

function Search({search}) {

  return (
    <form>
      <input
        className = 'search-products'
        type="text"
        placeholder="Search Products"
        onChange={(e) => search(e.target.value)}
      /> 
    </form>
  );
}

export default Search;
