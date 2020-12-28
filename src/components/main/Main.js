import React, { useEffect } from "react";
import ResultTop from "./ResultTop";
import Products from "./Products";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import {loadProduct} from "../../features/mainSlice";

function Main(props){
  const dispatch = useDispatch();
  const {
    valueTitle,
    valueType,
    valueByType,
    valueBrand,
    valueRating,    
    valuePriceStart,
    valuePriceEnd,
  } = useSelector((state) => state.menu);

  const {valueSearch} = useSelector((state) => state.header);

  const {
    products,
    sort,
    currentPage,
    isLoading
  } = useSelector((state) => state.main);

  useEffect(()=> {
    dispatch(loadProduct({valueTitle,
      valueType,
      valueByType,
      valueBrand,
      valueRating,
      valuePriceStart,
      valuePriceEnd,
      valueSearch,
      sort}))
  }, [
    valueTitle,
    valueType,
    valueByType,
    valueBrand,
    valueRating,    
    valuePriceStart,
    valuePriceEnd,
    valueSearch,
    sort,
    dispatch,
  ]);

  const indexOfLastProduct = currentPage * 4;
  const indexOfFirstProduct = indexOfLastProduct - 4;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="main">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ResultTop
            products={products}
          />
          <Products
            currentProducts={currentProducts}
          />

          <Pagination
            products={products}
          />
        </div>
      )}
    </div>
  );
}

export default Main;
