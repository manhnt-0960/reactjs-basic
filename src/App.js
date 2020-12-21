import React, {useState} from "react";
import "./scss/styles.scss";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";
import Main from "./components/main/Main";

function App(){
  // const handleValueSearch = (text) => {
  //   setValueSearch(text);
  // }

  return (
    <div>
      {/* <Header
        valueSearch={valueSearch}
        handleValueSearch={handleValueSearch}
      /> */}
      <Menu/>
      {/* <Main/> */}
    </div>
  );
}

export default App;
