import React from "react";
import {connect} from "react-redux";
import {editBrand} from "../../actions/menu";


function RefineByBrand(props){
  const {
    types,
    valueTitle,
    handleByBrand,
    valueBrand,
    valueType,
  } = props;

  const handleOnChange = (brand) => {
    const newCheckedBrand = [...valueBrand];
    const currentBrand = newCheckedBrand.indexOf(brand);

    if(currentBrand === -1){
      newCheckedBrand.push(brand);
    } else{
      newCheckedBrand.splice(currentBrand, 1);
    }
    handleByBrand(newCheckedBrand);
  }

  return(
    <div className="refine-by-brand">
      <ul>
        {types
          .filter((e) => e.title === valueTitle)
          .map((e) =>
            e.subs.filter((e) => e.type === valueType)
            .map((e)=>
              e.subs.map((e) =>(
              <li key={e.id}>
                      <input type="checkbox" id={e.id}
                        checked={valueBrand.includes(e.brand) ? true : false}
                        onChange={()=> handleOnChange(e.brand)}
                      />
                      <label htmlFor={e.id}>
                        {e.brand}
                      </label>
                    </li>
            ))
          ))
        }
      </ul>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleByBrand: (brand) => {
      dispatch(editBrand(brand))
    }
  }
};

export default connect(null, mapDispatchToProps)(RefineByBrand);
