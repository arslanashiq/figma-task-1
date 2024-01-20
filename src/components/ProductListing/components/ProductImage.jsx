import React from "react";
import { BACKGROUND_COLOR } from "utilities/constants";

function ProductImage({ img, name }) {
  return (
    <div
      style={{
        padding: "20px 20px",
        borderRadius: 5,
        backgroundColor: BACKGROUND_COLOR,
        height:160
      }}
      className="product-image"
    >
      <img
        src={img}
        alt={name}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export default ProductImage;
