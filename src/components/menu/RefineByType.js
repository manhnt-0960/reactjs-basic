import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {handleByType} from "../../features/menuSlice";

function RefineByType(props){
  const dispatch = useDispatch();
  const {types} = props;
  const {
    valueTitle,
    valueByType,
  } = useSelector((state) => state.menu);

  const handleOnChange = (type) => {
    dispatch(handleByType(type));
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

export default RefineByType;
