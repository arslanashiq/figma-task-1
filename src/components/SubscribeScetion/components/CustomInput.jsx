import React from "react";
import "styles/custom-input.css";

function CustomInput() {
  return (
    <div className="custom-search">
      <input
        type="text"
        className="custom-search-input"
        placeholder="Enter your email"
      />
      <button className="custom-search-botton" type="submit">
        Subscribe
      </button>
    </div>
  );
}

export default CustomInput;
