import React from "react";
import { TEXT_COLOR } from "utilities/constants";

function FooterSectionWithLink({ title, options }) {
  return (
    <div className="ps-0 ps-md-5 col-lg-3 col-md-6 col-12 mt-3">
      <label className="d-flex" style={{ fontSize: 18, fontWeight: 700 }}>
        {title}
      </label>
      <div
        style={{
          width: 30,
          height: 2.4,
          backgroundColor: "#3BB77E",
          marginTop: 2,
        }}
      />

      <div className="d-grid mt-3">
        {options.map((option) => (
          <label
            key={option.value}
            style={{ color: TEXT_COLOR, marginBottom: 6 }}
          >
            <a href={option.link}> {option.value}</a>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FooterSectionWithLink;
