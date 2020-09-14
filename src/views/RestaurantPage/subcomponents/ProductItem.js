import React from "react";

import "./ProductItem.scss";

export default function ProductItem({ product, selectProduct }) {
  return (
    <div className="product-item" onClick={selectProduct}>
      <div className="media">
        <img src={product.image} alt={"product-media"} />
      </div>
      <div className="details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <h4>
          {product.price} {product.currency}
        </h4>
      </div>
    </div>
  );
}
