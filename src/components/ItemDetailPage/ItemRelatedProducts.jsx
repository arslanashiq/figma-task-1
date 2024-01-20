import React from "react";
import arrow from "assets/arrow.png";
import { getProductList } from "utilities/constants";
import ProductItem from "components/ProductListing/components/ProductItem";

function ItemRelatedProducts() {
  return (
    <div className="col-12 row justify-content-center mt-5 mb-5">
      <div className="col-12 row justify-content-between">
        <div className="col">Related Products</div>
        <div className="col d-flex justify-content-end align-items-center ">
          <img
            src={arrow}
            style={{
              height: 20,
              width: 20,
              marginRight: 1,
              cursor: "pointer",
            }}
            alt="arrow"
            className="rotate-icon"
          />
          <img
            src={arrow}
            alt="arrow"
            style={{ height: 20, width: 20, cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="product-container">
        {getProductList(1).map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
}

export default ItemRelatedProducts;
