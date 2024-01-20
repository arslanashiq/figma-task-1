import React from "react";
import { PRIMARY_COLOR, TEXT_COLOR } from "utilities/constants";

function FooterSocialSectionContactInformation({ icon, label, value }) {
  return (
    <div className="col-12 d-flex align-items-center p-0">
      <img
        src={icon}
        style={{
          height: 16,
          width: 16,
          objectFit: "contain",
          color: PRIMARY_COLOR,
        }}
        alt="phone"
      />
      <p
        style={{
          margin: 0,
          fontSize: 13,
          color: TEXT_COLOR,
        }}
      >
        <span
          style={{
            color: PRIMARY_COLOR,
            padding: "0px 5px",
            fontWeight: 500,
          }}
        >
          {label}
        </span>
        {value}
      </p>
    </div>
  );
}

export default FooterSocialSectionContactInformation;
