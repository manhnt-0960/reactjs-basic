import * as Types from "../constants/index";

const initialState = {
  currentPage: 1,
  products: [],
  countProduct: "",
  error: "",
  isLoading: false,
  sort: ""
};

const main = (state = initialState, action) => {
  switch (action.type){
    case Types.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.products,
        isLoading: false,
        error: ""
      };
    
    case Types.EDIT_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }

    case Types.EDIT_SORT:
      return {
        ...state,
        sort: action.sort,
      }
    
    case Types.EDIT_COUNT_PRODUCT:
      return {
        ...state,
        countProduct: action.countProduct
      }
    
    default:
      return {
        ...state
      }
  }
}

export default main;
