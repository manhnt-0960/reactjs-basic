import * as Types from "../constants/index";
import {fetchTypesAPI} from "../api/index";
// import {beginFetch} from "./main";

export const editTitle = (title) => {
  return {
    type: Types.EDIT_TITLE,
    title,
  }
};

export const editType = (type) => {
  return {
    type: Types.EDIT_TYPE,
    payload: type,
  }
};

export const editByType = (byType) => {
  return {
    type: Types.EDIT_BY_TYPE,
    byType,
  }
};

export const editBrand = (brand) => {
  return {
    type: Types.EDIT_BRAND,
    brand,
  }
};

export const editRating = (rating) => {
  return {
    type: Types.EDIT_RATING,
    rating,
  }
};

export const editPriceEnd = (priceEnd) => {
  return {
    type: Types.EDIT_PRICE_END,
    priceEnd,
  }
};

export const editPriceStart = (priceStart) => {
  return {
    type: Types.EDIT_PRICE_START,
    priceStart,
  }
};

export const clearAllFillter = () => {
  return {
    type: Types.CLEAR_FILLTER,
  }
};

export const fetchTypes = () => {
  return dispatch => {
    dispatch(beginFetchMenu());
    fetchTypesAPI()
      .then(res => res.json())
      .then(types => {console.log(types); return dispatch(fetchTypesSuccess(types))});
  }
};

export const fetchTypesSuccess = (types) => {
  return {
    type: Types.FETCH_TYPES_SUCCESS,
    types,
  }
}

export const beginFetchMenu = () => {
  return {
   type: Types.BEGIN_FETCH_MENU,
  }
}
