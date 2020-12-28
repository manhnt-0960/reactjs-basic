import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {handleBrand} from "../../features/menuSlice";


function RefineByBrand(props){
  const dispatch = useDispatch();
  const {types} = props;
  const {
    valueTitle,
    valueBrand,
    valueType,
  } = useSelector((state) => state.menu);

  const handleOnChange = (brand) => {
    dispatch(handleBrand(brand));
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

export default RefineByBrand;
