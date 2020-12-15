import React from "react";

function Pagination(props){
  const {currentPage, handleCurrentPage, totalProduct} = props;

  const totalPage = Math.ceil(totalProduct / 4);

  const numberPage = [];

  for (let i = 1; numberPage.push(i++) < totalPage;);

  return (
    <div className="pagination">
      <ul>
        <li>
          <button
            disabled={currentPage <= 1}
            onClick={()=> handleCurrentPage(currentPage - 1)}
          >
            <i className="fa fa-angle-left"></i> Previous page
          </button>
        </li>
        {numberPage.map((e) => (
          <li
            key={e}
            onClick={() => handleCurrentPage(e)}
            className={currentPage === e ? "active" : ""}
          >
          <span>{e}</span>
          </li>
        ))}
        <button
          disabled={currentPage >= totalPage}
          onClick={() => handleCurrentPage(currentPage + 1)}
        >
          Next page<i className="fa fa-angle-right"></i>
        </button>
      </ul>
    </div>
  );
}

export default Pagination;
