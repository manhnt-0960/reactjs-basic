import * as Types from "../constants/index";

const initialState = {
  valueTitle: "",
  valueType: "",
  valueByType: [],
  valueBrand: [],
  valueRating: "",
  valuePriceStart: "",
  valuePriceEnd: "",
  types: [],
};

const menu = (state = initialState, action) => {
  switch(action.type) {
    case Types.EDIT_TITLE:
       return {
         ...state,
         valueTitle: action.title
       };

    case Types.EDIT_TYPE:
      return {
        ...state,
        valueType: action.payload,
      };

    case Types.EDIT_BY_TYPE:
      return {
        ...state,
        valueByType: action.byType
      };

    case Types.EDIT_BRAND:
      return {
        ...state,
        valueBrand: action.brand
      };

    case Types.EDIT_RATING:
      return {
        ...state,
        valueRating: action.rating,
      };

    case Types.EDIT_PRICE_START:
      return {
        ...state,
        valuePriceStart: action.priceStart,
      };

    case Types.EDIT_PRICE_END:
      return {
        ...state,
        valuePriceEnd: action.priceEnd,
      };

    case Types.CLEAR_FILLTER:
      return {
        ...initialState
      };

    case Types.FETCH_TYPES_SUCCESS:
      return {
        ...state,
        types: action.types,
      };

    default:
      return {...state};
  }
};

export default menu;
