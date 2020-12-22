import * as Types from "../constants/index";

export const editSearch = (text) => {
  return {
    type: Types.EDIT_TEXT_SEARCH,
    text,
  }
};
