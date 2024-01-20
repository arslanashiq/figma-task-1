import React from "react";
import { PRIMARY_COLOR } from "utilities/constants";

function SocialIcon({ iconSrc }) {
  return (
    <button
      style={{
        height: 35,
        width: 35,
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: PRIMARY_COLOR,
        cursor: "pointer",
      }}
      className="border-0"
    >
      <img
        src={iconSrc}
        alt="icon"
        style={{ height: 18, width: 18, objectFit: "contain" }}
      />
    </button>
  );
}

export default SocialIcon;
