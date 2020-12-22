import * as Types from "../constants/index"

const initialState = {
  valueSearch: "",
}

const header = (state = initialState, action) => {
  switch(action.type){
    case Types.EDIT_TEXT_SEARCH:
      return {
        ...state,
        valueSearch: action.text
      };

    default:
      return {
        ...state
      };
  }
};

export default header;
