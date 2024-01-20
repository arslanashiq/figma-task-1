import React from "react";
import ProductItem from "./components/ProductItem";
import { getProductList } from "utilities/constants";

function ProductListing() {
  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="container">
        <div className="product-container">
          {getProductList(5).map((product) => (
            <ProductItem product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
