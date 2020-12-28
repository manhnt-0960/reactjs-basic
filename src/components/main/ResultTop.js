import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {handleSort} from "../../features/mainSlice";

function ResultTop(props) {
  const dispatch = useDispatch();
  const {products} = props;
  const {sort} = useSelector((state) => state.main);

  return (
    <div className="result-top">
      <div className="result-top__left">
        {products.length} results found in 3ms
      </div>
      <div className="result-top__right">
        <label>Sort by</label>
        <select
          onChange={(e) => dispatch(handleSort(e.target.value))}
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
