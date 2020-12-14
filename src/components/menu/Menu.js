import React, {useState, useEffect} from "react";
import ShowResultFor from "./ShowResultFor";
import RefineByType from "./RefineByType";
import RefineByBrand from "./RefineByBrand";
import RefineByRatings from "./RefineByRatings";
import RefineByPrices from "./RefineByPrices";

function Menu(props){
  const {
    valueTitle,
    handleTitle,
    valueType,
    handleType,
    valueByType,
    handleByType,
    valueByBrand,
    handleByBrand,
    valueByRating,    
    handleByRating,
  } = props;

  const [types, setTypes] = useState([]);

  useEffect(()=>{
    let url = "http://localhost:4000/types";

    fetch(url)
      .then((res)=> res.json())
      .then((result)=>{
        setTypes(result);
      });
  }, []);

  return(
    <React.Fragment>
      <aside className="menu">
        <div className="menu__clear">
          <button>Clear all filter</button>
        </div>
        <div className="menu__result">
          <p className="menu__title-1">Show result for</p>
          <ShowResultFor
            types={types}
            valueTitle={valueTitle}
            handleTitle={handleTitle}
            valueType={valueType}
            handleType={handleType}
          />
        </div>
        <hr></hr>
        <div className="menu__refine">
          <p className="menu__title-1">Refine by</p>
          <p className="menu__title-2">Type</p>
          <RefineByType
            types={types}
            valueTitle={valueTitle}
            handleTitle={handleTitle}
            valueByType={valueByType}
            handleByType={handleByType}
          />

          <p className="menu__title-2">Brand</p>
          <RefineByBrand
            types={types}
            valueTitle={valueTitle}
            handleByBrand={handleByBrand}
            valueByBrand={valueByBrand}
            valueType={valueType}
          />

          <p className="menu__title-2">Ratings</p>
          <RefineByRatings
            valueByRating={valueByRating}
            handleByRating={handleByRating}
          />
          
          <p className="menu__title-2">Prices</p>
          <RefineByPrices/>
        </div>
        <hr></hr>
        <div className="menu__text">Data courtesy of Best Buy</div>
      </aside>
    </React.Fragment>
  );
}

export default Menu;
