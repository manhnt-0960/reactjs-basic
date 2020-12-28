import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {handlePriceEnd, handlePriceStart} from "../../features/menuSlice";

function RefineByPrices(){
  const dispatch = useDispatch();
  const {
    valuePriceStart,
    valuePriceEnd,
  } = useSelector((state) => state.menu);

  const [startInput, setStartInput] = useState("");
  const [endInput, setEndInput] = useState("");

  const prices = ["", 1, 80, 160, 240, 480, 1800, 3400, 4900, ""];
  const itemPrices = [];

  const handleOnClick = (start, end) => {
    dispatch(handlePriceStart(start));
    dispatch(handlePriceEnd(end));
    setEndInput(end);
    setStartInput(start);
  }

  for (let i = 0; i < prices.length - 1; i++){
    let item = {
      id: i + 1,
      start: prices[i],
      end: prices[i+1],
    };
    itemPrices.push(item);
  }

  return(
    <div className='refine-by-prices'>
      <ul>
        {itemPrices.map((e, i) => {
          if (e.start === ""){
            return (
              <li
                key={i}
                onClick={()=> handleOnClick(e.start, e.end)}
                className={valuePriceEnd === e.end ? "active" : ""}
              >
                ≤{e.end}
              </li>
            );
          } else if (e.end === "") {
            return (
              <li
                key={i}
                onClick={()=> handleOnClick(e.start, e.end)}
                className={valuePriceStart === e.start ? "active" : ""}
              >
                ≥{e.start}
              </li>
            );
          } else {
            return (
              <li
                key={i}
                onClick={()=> handleOnClick(e.start, e.end)}
                className={valuePriceStart === e.start ? "active" : ""}
              >
                {e.start} - {e.end}
              </li>
            );
          }
        })}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnClick(startInput, endInput);
        }}
      >
        <label>
          <span>$</span>
          <input
            type="number"
            value={startInput}
            onChange={(e) => setStartInput(e.target.value)}
          />
        </label>
        <label>
          <span>to $</span>
          <input
            type="number"
            value={endInput}
            onChange={(e) => setEndInput(e.target.value)}
          />
        </label>
        <button type="submit">Go</button>
      </form>
    </div>
  );
}

export default RefineByPrices;
