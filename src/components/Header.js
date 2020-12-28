import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {handleSearch} from "../features/headerSlice";

function Header(){
  const dispatch = useDispatch();

  const valueSearch = useSelector((state) => state.header.valueSearch);
  const handleValueSearch = (text) => {
    const action = handleSearch(text);
    dispatch(action);
  }
  return (
    <header>
      <a href="./" className="header__logo">
        <img
          src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png"
          alt=""
        />
      </a>
      <a href="./" className="header__text">amazing</a>
      <div className="header__input">
        <input
          placeholder="Search a product"
          value={valueSearch}
          onChange={(e) => handleValueSearch(e.target.value)}
        />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
