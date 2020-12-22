import * as Types from "../constants/index";
import {fetchProducts} from "../api/index"

export const fetchProduct = (valueTitle,
  valueType,
  valueByType,
  valueBrand,
  valueRating,
  valuePriceStart,
  valuePriceEnd,
  valueSearch,
  sort) => {
  return dispatch => {
    fetchProducts(valueTitle,
      valueType,
      valueByType,
      valueBrand,
      valueRating,
      valuePriceStart,
      valuePriceEnd,
      valueSearch,
      sort,)
    .then(res => res.json())
    .then(products => {console.log(products); return dispatch(fetchProductSuccess(products))})
  };
};

export const fetchProductSuccess = (products) => {
  return {
    type: Types.FETCH_PRODUCT_SUCCESS,
    products
  }
};

export const editCurrentPage = (currentPage) => {
  return {
    type: Types.EDIT_CURRENT_PAGE,
    currentPage,
  }
};

export const editSort = (sort) => {
  return {
    type: Types.EDIT_SORT,
    sort,
  }
};

export const editCountProduct = (countProduct) => {
  return {
    type: Types.EDIT_COUNT_PRODUCT,
    countProduct,
  }
}
