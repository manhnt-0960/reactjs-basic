import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchTypes, handleClearFillter} from "../../features/menuSlice"

import ShowResultFor from "./ShowResultFor";
import RefineByType from "./RefineByType";
import RefineByBrand from "./RefineByBrand";
import RefineByRatings from "./RefineByRatings";
import RefineByPrices from "./RefineByPrices";

function Menu(props){
  const dispatch = useDispatch();

  const {
    types,
    valueTitle,
    valueType,
    valueByType,
    valueBrand,
    valueRating,
    valuePriceStart,
    valuePriceEnd,
    MenuIsLoading
  } = useSelector((state) => state.menu);

  useEffect(() => {
    const action = fetchTypes();
    dispatch(action);
  }, [dispatch]);

  return(
    <React.Fragment>
      <aside className="menu">
        {MenuIsLoading ? (
          <div>Loading....</div>
        ) : (
          <div>
            <div className="menu__clear">
            {valueBrand.length > 0 ||
              valueTitle ||
              valueType ||
              valueByType.length > 0 ||
              valueRating ||
              valuePriceStart ||
              valuePriceEnd ? (
                <button onClick={()=> dispatch(handleClearFillter())}>Clear all filter</button>
              ) : ("")
            }
          </div>
          <div className="menu__result">
            <p className="menu__title-1">Show result for</p>
            <ShowResultFor
              types={types}
            />
          </div>
          <hr></hr>
          <div className="menu__refine">
            <p className="menu__title-1">Refine by</p>
            <p className="menu__title-2">Type</p>
            <RefineByType
              types={types}
            />

            <p className="menu__title-2">Brand</p>
            <RefineByBrand
              types={types}
            />

            <p className="menu__title-2">Ratings</p>
            <RefineByRatings
            />
            
            <p className="menu__title-2">Prices</p>
            <RefineByPrices
            />
          </div>
          <hr></hr>
          <div className="menu__text">Data courtesy of Best Buy</div>
        </div>
      )}
      </aside>
    </React.Fragment>
  );
}

export default Menu;
