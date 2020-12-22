import React from "react";
import {connect} from "react-redux";
import {editRating} from "../../actions/menu";

function RefineByRatings(props){
  const {
    valueRating,
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
        stars.push(<span className="fa fa-star-o" key={i} />);
      }
      i++;
    }
    return stars;
  };

  const handleOnClick = (rating) => {
    handleByRating(rating);
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleByRating: (rating) => dispatch(editRating(rating))
  }
};

export default connect(null, mapDispatchToProps)(RefineByRatings);
