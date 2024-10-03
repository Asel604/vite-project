import React from "react";
import "./Product.css";


function Product({ image, name, price }) {
  return (
    <div className="prod">
      <img src={image} alt="" />
   
      <div className="content">
        <h4>{name}</h4>
        <p>{price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
