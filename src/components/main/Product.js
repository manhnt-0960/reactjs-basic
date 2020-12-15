import React from "react";

function Product(props) {
  const {product} = props;

  const productRating = (rating) => {
    let ratings = [];
    for (let i = 0; i < rating; i++){
      ratings.push(<span className="fa fa-star" key={i}></span>);
    }

    for (let i = 0; i < 5 - rating; i++) {
      ratings.push(<span className="fa fa-star-o" key={5 - i} />);
    }
    return ratings;
  }

  return (
    <div className="product">
      <div className="product__img">
        <img src={product.image} alt="" />
      </div>
      <div className="product__desc">
        <div className="product__desc__name">{product.name}</div>
        <div className="product__desc__type">{product.type}</div>
        <div className="product__desc__price">{product.price}</div>
        <div className="product__desc__rating">
          {productRating(product.ratings)}
        </div>
      </div>
    </div>
  );
} 

export default Product;
