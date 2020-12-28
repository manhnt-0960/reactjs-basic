import React from "react";

function ResultTop(props) {
  const {
    countProduct, sort, handleSort
  } = props;

  return (
    <div className="result-top">
      <div className="result-top__left">
        {countProduct} results found in 3ms
      </div>
      <div className="result-top__right">
        <label>Sort by</label>
        <select
          onChange={(e) => handleSort(e.target.value)}
          value={sort}
          >
          <option value="">Featured</option>
          <option value="asc">Price ASC.</option>
          <option value="desc">Price DESC.</option>
        </select>
      </div>
    </div>
  );
}

export default ResultTop;
