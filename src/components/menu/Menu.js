import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {fetchTypes, clearAllFillter} from "../../actions/index"

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
    fetchTypes
  } = props;

  useEffect(() => {
    fetchTypes();
  }, []);

  const clearFillter = () => {
    clearAllFillter();
  }

  return(
    <React.Fragment>
      <aside className="menu">
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
          {/* <RefineByType
          /> */}

          <p className="menu__title-2">Brand</p>
          {/* <RefineByBrand
          /> */}

          <p className="menu__title-2">Ratings</p>
          {/* <RefineByRatings
          /> */}
          
          <p className="menu__title-2">Prices</p>
          {/* <RefineByPrices
          /> */}
        </div>
        <hr></hr>
        <div className="menu__text">Data courtesy of Best Buy</div>
      </aside>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    types: state.types,
    valueTitle: state.valueTitle,
    valueType: state.valueType,
    valueByType: state.valueByType,
    valueBrand: state.valueBrand,
    valueRating: state.valueRating,
    valuePriceStart: state.valuePriceStart,
    valuePriceEnd: state.valuePriceEnd,
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
