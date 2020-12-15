import React, { useState, useEffect } from "react";
import ResultTop from "./ResultTop";
import Products from "./Products";
import Pagination from "./Pagination";

function Main(props){
  const {
    valueTitle,
    valueType,
    valueByType,
    valueByBrand,
    valueByRating,    
    valueByPriceStart,
    valueByPriceEnd,
    valueSearch,
  } = props;

  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=> {
    let url= `http://localhost:4000/products?`;

    if (valueTitle) {
      url += `&title=${valueTitle}`;
    }

    if (valueType) {
      url += `&type=${valueType}`;
    }

    if (valueByType.length > 0) {
      for (let i = 0; i < valueByType.length; i++){
        url += `&byType=${valueByType[i]}`;
      }
    }

    if (valueByBrand.length > 0) {
      for (let i = 0; i < valueByBrand.length; i++){
        url += `&brand=${valueByBrand[i]}`;
      }
    }

    if (valueByRating) {
      for (let i = valueByRating; i < 5; i++ ){
        url += `&ratings=${i}`;
      }
    }
    
    if (valueByPriceStart) {
      url += `&price_gte=${valueByPriceStart}`;
    }

    if (valueByPriceEnd) {
      url += `&price_lte=${valueByPriceEnd}`;
    }

    if (valueSearch) {
      url +=`&q=${valueSearch}`;
    }

    if (sort) {
      url += `&_sort=price&_order=${sort}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      })
  }, [
    valueTitle,
    valueType,
    valueByType,
    valueByBrand,
    valueByRating,    
    valueByPriceStart,
    valueByPriceEnd,
    valueSearch,
    sort,
  ]);

  const handleSort = (sort) => {
    setSort(sort);
  }

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  }

  const indexOfLastProduct = currentPage * 4;
  const indexOfFirstProduct = indexOfLastProduct - 4;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="main">
      <ResultTop
        products={products}
        sort={sort}
        handleSort={handleSort}
      />
      <Products
        products={currentProducts}
      />

      <Pagination
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
        totalProduct={products.length}
      />
    </div>
  )
}

export default Main;
