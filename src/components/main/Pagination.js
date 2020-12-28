import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {handleCurrentPage} from "../../features/mainSlice";

function Pagination(props){
  const dispatch = useDispatch();
  const {currentPage} = useSelector((state) => state.main);
  const {products} = props;
  const totalProduct = products.length;
  const totalPage = Math.ceil(totalProduct / 4);

  const numberPage = [];

  for (let i = 1; numberPage.push(i++) < totalPage;);

  return (
    <div className="pagination">
      <ul>
        <li>
          <button
            disabled={currentPage <= 1}
            onClick={()=> dispatch(handleCurrentPage(currentPage - 1))}
          >
            <i className="fa fa-angle-left"></i> Previous page
          </button>
        </li>
        {numberPage.map((e) => (
          <li
            key={e}
            onClick={() => dispatch(handleCurrentPage(e))}
            className={currentPage === e ? "active" : ""}
          >
          <span>{e}</span>
          </li>
        ))}
        <button
          disabled={currentPage >= totalPage}
          onClick={() => dispatch(handleCurrentPage(currentPage + 1))}
        >
          Next page<i className="fa fa-angle-right"></i>
        </button>
      </ul>
    </div>
  );
}

export default Pagination;
