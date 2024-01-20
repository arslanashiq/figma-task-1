import React from "react";

function ProductRating({
  arrayLength,
  icon,
  style = {
    width: 10,
    height: 10,
  },
}) {
  return Array.from({ length: arrayLength }, () => "").map((_) => (
    <img src={icon} alt="rating" style={{ ...style }} />
  ));
}

export default ProductRating;
