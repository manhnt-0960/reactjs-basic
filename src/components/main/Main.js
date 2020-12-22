import React, { useEffect } from "react";
import ResultTop from "./ResultTop";
import Products from "./Products";
import Pagination from "./Pagination";
import { fetchProduct, editCountProduct, editCurrentPage, editSort } from "../../actions/main";
import { connect } from "react-redux";

function Main(props){
  const {
    valueTitle,
    valueType,
    valueByType,
    valueBrand,
    valueRating,    
    valuePriceStart,
    valuePriceEnd,
    valueSearch,
    products,
    sort,
    currentPage,
    countProduct,
    loadProduct,
    handleCountProduct,
    handleCurrentPage,
    handleSort
  } = props;

  useEffect(()=> {
    loadProduct(valueTitle,
      valueType,
      valueByType,
      valueBrand,
      valueRating,
      valuePriceStart,
      valuePriceEnd,
      valueSearch,
      sort)
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
    loadProduct
  ]);

  useEffect(()=>{

    handleCountProduct(products.length)
  }, [products, handleCountProduct])

  const indexOfLastProduct = currentPage * 4;
  const indexOfFirstProduct = indexOfLastProduct - 4;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="main">
      <ResultTop
        countProduct={countProduct}
        sort={sort}
        handleSort={handleSort}
      />
      <Products
        products={currentProducts}
      />

      <Pagination
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
        totalProduct={countProduct}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.main.products,
    sort: state.main.sort,
    currentPage: state.main.currentPage,
    countProduct: state.main.countProduct,
    isLoading: state.main.isLoading,
    types: state.menu.types,
    valueTitle: state.menu.valueTitle,
    valueType: state.menu.valueType,
    valueByType: state.menu.valueByType,
    valueBrand: state.menu.valueBrand,
    valueRating: state.menu.valueRating,
    valuePriceStart: state.menu.valuePriceStart,
    valuePriceEnd: state.menu.valuePriceEnd,
    valueSearch: state.header.valueSearch,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProduct: (valueTitle,
      valueType,
      valueByType,
      valueBrand,
      valueRating,
      valuePriceStart,
      valuePriceEnd,
      valueSearch,
      sort) => {
        dispatch(fetchProduct(valueTitle,
          valueType,
          valueByType,
          valueBrand,
          valueRating,
          valuePriceStart,
          valuePriceEnd,
          valueSearch,
          sort))
      },
    handleCountProduct: (countProduct) => dispatch(editCountProduct(countProduct)),
    handleCurrentPage: (currentPage) => dispatch(editCurrentPage(currentPage)),
    handleSort: (sort) => dispatch(editSort(sort)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
