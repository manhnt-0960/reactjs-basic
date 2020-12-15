import React from "react";
import Product from "./Product";

function Products(props) {
  const {products} = props;

  return (
    <div className="products">
      {products.map((product, i) => (
        <Product product={product} key={i}/>
      ))}
    </div>
  );
}

export default Products;
