import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {handleRating} from "../../features/menuSlice";

function RefineByRatings(){
  const dispatch = useDispatch();
  const { valueRating } = useSelector((state) => state.menu);

  const ratings = [4, 3, 2, 1];

  const productRating = (rating) => {
    let stars = [];

    let i = 0;
    while(i < 5){
      if(i < rating){
        stars.push(<span className="fa fa-star" key={i} />);
      } else{
        stars.push(<span className="fa fa-star-o" key={i} />);
      }
      i++;
    }
    return stars;
  };

  const handleOnClick = (rating) => {
    const action = handleRating(rating);
    dispatch(action);
  };

  return(
    <div className="refine-by-ratings">
      <ul>
        {ratings.map((e, i) => (
          <li key={i}
            onClick={()=> handleOnClick(e)}
            className={valueRating === e ? "active" : ""}
          >
          {productRating(e)} & Up
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RefineByRatings;
