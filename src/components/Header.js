import React from "react"

function Header(props){
  const {valueSearch, handleValueSearch} = props;

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
