import React from "react";

function RoutineSearch({search}) {

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

export default RoutineSearch;
