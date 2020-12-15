import React, {useState} from "react";

function RefineByPrices(props){
  const {
    valueByPriceStart,
    valueByPriceEnd,
    handleByPrice,
  } = props;

  const [startInput, setStartInput] = useState("");
  const [endInput, setEndInput] = useState("");

  const prices = ["", 1, 80, 160, 240, 480, 1800, 3400, 4900, ""];
  const itemPrices = [];

  const handleOnClick = (start, end) => {
    handleByPrice(start, end);
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
                className={valueByPriceEnd === e.end ? "active" : ""}
              >
                ≤{e.end}
              </li>
            );
          } else if (e.end === "") {
            return (
              <li
                key={i}
                onClick={()=> handleOnClick(e.start, e.end)}
                className={valueByPriceStart === e.start ? "active" : ""}
              >
                ≥{e.start}
              </li>
            );
          } else {
            return (
              <li
                key={i}
                onClick={()=> handleOnClick(e.start, e.end)}
                className={valueByPriceStart === e.start ? "active" : ""}
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
