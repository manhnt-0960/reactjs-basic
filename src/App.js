import React, {useState} from "react";
import "./scss/styles.scss";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";

function App(){
  const [valueTitle, setValueTitle] = useState("");
  const [valueType, setValueType] = useState("");
  const [valueByType, setValueByType] = useState([]);
  const [valueByBrand, setValueByBrand] = useState([]);
  const [valueByRating, setValueByRating] = useState("");

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

  return (
    <div>
      <Header/>
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
      />
    </div>
  );
}

export default App;
