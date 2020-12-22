import React from "react";
import {connect} from "react-redux";
import {editByType} from "../../actions/menu";

function RefineByType(props){
  const {
    types,
    valueTitle,
    valueByType,
    handleByType,
  } = props;

  const handleOnChange = (type) => {
    const newChecked = [...valueByType];
    const currentType = newChecked.indexOf(type)
    
    if(currentType === -1){
      newChecked.push(type);
    } else{
      newChecked.splice(currentType, 1);
    }

    handleByType(newChecked);
  };

  return(
    <div className="refine-by-type">
      <ul>
        {types.filter((e) => e.title === valueTitle)
        .map((e)=>(
          e.subs.map((e) => (
            <li key={e.id}>
              <input
                type="checkbox"
                id={e.id}
                checked={valueByType.includes(e.type) ? true : false}
                onChange={() => handleOnChange(e.type)}
              />
              <label htmlFor={e.id}>
                {e.type}
              </label>
            </li>
          ))
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    valueTitle: state.menu.valueTitle,
    valueByType: state.menu.valueByType,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleByType: (type) => {
      dispatch(editByType(type))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RefineByType);
