import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchTypes, clearAllFillter} from "../../actions/menu"

import ShowResultFor from "./ShowResultFor";
import RefineByType from "./RefineByType";
import RefineByBrand from "./RefineByBrand";
import RefineByRatings from "./RefineByRatings";
import RefineByPrices from "./RefineByPrices";

function Menu(props){
  const {
    types,
    valueTitle,
    valueType,
    valueByType,
    valueBrand,
    valueRating,
    valuePriceStart,
    valuePriceEnd,
    clearAllFillter,
    fetchTypes,
    MenuIsLoading
  } = props;

  useEffect(() => {
    fetchTypes();
  }, [fetchTypes]);

  const clearFillter = () => {
    clearAllFillter();
  }

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
                <button onClick={()=> clearFillter()}>Clear all filter</button>
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
              valueTitle={valueTitle}
              valueType={valueType}
              valueBrand={valueBrand}
            />

            <p className="menu__title-2">Ratings</p>
            <RefineByRatings
              valueRating={valueRating}
            />
            
            <p className="menu__title-2">Prices</p>
            <RefineByPrices
              valuePriceStart={valuePriceStart}
              valuePriceEnd={valuePriceEnd}
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

const mapStateToProps = (state) => {
  return {
    types: state.menu.types,
    valueTitle: state.menu.valueTitle,
    valueType: state.menu.valueType,
    valueByType: state.menu.valueByType,
    valueBrand: state.menu.valueBrand,
    valueRating: state.menu.valueRating,
    valuePriceStart: state.menu.valuePriceStart,
    valuePriceEnd: state.menu.valuePriceEnd,
    MenuIsLoading: state.menu.MenuIsLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearAllFillter: () => {
      dispatch(clearAllFillter());
    },
    fetchTypes: () => {
      dispatch(fetchTypes());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
