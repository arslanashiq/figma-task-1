import React from "react";
import shoppingCart from "assets/shopping-cart.png";
import { BUTTON_BACKGROUND_COLOR } from "utilities/constants";

function ProductAddToCartButton({ currency, price }) {
  return (
    <div className="row justify-content-space-between mt-3">
      <div className="col" style={{ fontSize: 15, fontWeight: 600 }}>
        {currency}
        {price?.toFixed(2)}
      </div>
      <div className="col">
        <button
          style={{ fontSize: 12, backgroundColor: BUTTON_BACKGROUND_COLOR }}
          className=" d-flex align-items-center btn btn-dark btn-sm"
        >
          <img
            src={shoppingCart}
            alt="cart"
            style={{
              width: 15,
              height: 15,
              marginRight: 10,
            }}
          />
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductAddToCartButton;
