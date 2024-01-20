import React from "react";
import ProductImage from "./ProductImage";
import { PRODUCT_DETAIL_TEXT_COLOR } from "utilities/constants";
import ProductRating from "./ProductRating";
import ProductAddToCartButton from "./ProductAddToCartButton";

import star from "assets/star.png";
import goldStar from "assets/golden-star.png";

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <ProductImage {...product} />
      <div className="text-center mt-3">
        <h6 style={{ color: "black" }}>{product.name}</h6>
        <p
          style={{
            color: PRODUCT_DETAIL_TEXT_COLOR,
            fontSize: 12,
            margin: 0,
          }}
        >
          {product.description}
        </p>
        <div>
          <ProductRating arrayLength={product.rating} icon={goldStar} />
          <ProductRating arrayLength={5 - product.rating} icon={star} />

          <span style={{ fontSize: 10, marginLeft: 10 }}>
            ({product.reviews})
          </span>
        </div>
        <ProductAddToCartButton {...product} />
      </div>
    </div>
  );
}

export default ProductItem;
