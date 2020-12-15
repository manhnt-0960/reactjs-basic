import React, {useState} from "react";
import "./scss/styles.scss";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";
import Main from "./components/main/Main";

function App(){
  const [valueTitle, setValueTitle] = useState("");
  const [valueType, setValueType] = useState("");
  const [valueByType, setValueByType] = useState([]);
  const [valueByBrand, setValueByBrand] = useState([]);
  const [valueByRating, setValueByRating] = useState("");
  const [valueByPriceStart, setValueByPrinceStart] = useState("");
  const [valueByPriceEnd, setValueByPrinceEnd] = useState("");
  const [valueSearch, setValueSearch] = useState("");

  const handleTitle = (title) => {
    setValueTitle(title);
  }

  const handleType = (type) => {
    setValueType(type);
  }

  const handleByType = (bytype) => {
    setValueByType(bytype);
  }

  const handleByBrand = (brand) => {
    setValueByBrand(brand);
  }

  const handleByRating = (rating) => {
    setValueByRating(rating);
  }

  const handleByPrice = (priceStart, priceEnd) => {
    setValueByPrinceStart(priceStart);
    setValueByPrinceEnd(priceEnd);
  }

  const handleClearAllFilter = () => {
    setValueTitle("");
    setValueType("");
    setValueByType([]);
    setValueByBrand([]);
    setValueByRating("");
    setValueByPrinceStart("");
    setValueByPrinceEnd("");
  }

  const handleValueSearch = (text) => {
    setValueSearch(text);
  }

  return (
    <div>
      <Header
        valueSearch={valueSearch}
        handleValueSearch={handleValueSearch}
      />
      <Menu
        valueTitle={valueTitle}
        handleTitle={handleTitle}
        valueType={valueType}
        handleType={handleType}
        valueByType={valueByType}
        handleByType={handleByType}
        valueByBrand={valueByBrand}
        handleByBrand={handleByBrand}
        valueByRating={valueByRating}
        handleByRating={handleByRating}
        valueByPriceStart={valueByPriceStart}
        valueByPriceEnd={valueByPriceEnd}
        handleByPrice={handleByPrice}
        handleClearAllFilter={handleClearAllFilter}
      />
      <Main
        valueTitle={valueTitle}
        valueType={valueType}
        valueByType={valueByType}
        valueByBrand={valueByBrand}
        valueByRating={valueByRating}
        valueByPriceStart={valueByPriceStart}
        valueByPriceEnd={valueByPriceEnd}
        valueSearch={valueSearch}
      />
    </div>
  );
}

export default App;
