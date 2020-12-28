import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {handleTitle, handleType} from "../../features/menuSlice";

function ShowResultFor(props){
  const dispatch = useDispatch();
  const {types} = props;
  const { valueTitle, valueType } = useSelector((state) => state.menu);

  const toggle = (id, title, subs) => {
    let index = types.findIndex((x) => x.id === id)

    if (index !== -1){
      dispatch(handleTitle(title));
      dispatch(handleType(""));
    }
  }

  const toggleSub = (id, type, typeMain) => {
    let index = typeMain.subs.findIndex((x) => x.id  === id);
    if(index !== -1){
      dispatch(handleType(type));
    }
  }

  return(
    <div className="show-result-for">
      <ul>
        {types.map((type)=> (
          <li key={type.id}>
            <span
              className={valueTitle.includes(type.title) ? "active" : ""}
              onClick={()=>{
                toggle(type.id, type.title, type.subs);
              }}
            >
              <i className="fa fa-angle-right"></i>{type.title}
            </span>
            <ul
              style={{
                display: valueTitle.includes(type.title) ? "block" : "none",
              }}
            >
              {type.subs.map((sub) => (
                <li key={sub.id}>
                  <span
                    className={valueType.includes(sub.type) ? "active" : ""}
                    onClick={()=>{
                      toggleSub(sub.id, sub.type, type);
                    }}
                  >
                    <i className="fa fa-angle-right"></i>{sub.type}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowResultFor;
