import React from "react"

function RefineByRatings(props){
  const {
    valueByRating,
    handleByRating,
  } = props;

  const ratings = [4, 3, 2, 1];

  const productRating = (rating) => {
    let stars = [];

    let i = 0;
    while(i < 5){
      if(i < rating){
        stars.push(<span className="fa fa-star" key={i} />);
      } else{
        stars.push(<span className="fa fa-star-o" key={5 - i} />);
      }
      i++;
    }
    return stars;
  };

  const handleOnClick = (rating) => {
    handleByRating(rating);
  };

  return(
    <div class="refine-by-ratings">
      <ul>
        {ratings.map((e, i) => (
          <li key={i}
            onClick={()=> handleOnClick(e)}
            className={valueByRating === e ? "active" : ""}
          >
          {productRating(e)} & Up
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RefineByRatings;
