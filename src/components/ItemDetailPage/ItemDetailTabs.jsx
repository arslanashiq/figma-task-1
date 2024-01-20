import React from "react";
import { PRIMARY_COLOR } from "utilities/constants";

function ItemDetailTabs() {
  const detailInfo = [
    {
      value: `The LG C2 42 (106cm) 4K Smart OLED evo TV is the best
      all-around OLED TV we've tested. Although all OLEDs deliver
      similar fantastic picture quality, this one stands out for its
      value because it has many gaming-oriented features that are
      great for gamers.`,
      style: { marginBottom: 10 },
    },
    {
      value: `*Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.`,
      style: { marginBottom: 0 },
    },
    {
      value: `**65C2 Stand model is at a minimum 39% lighter than the C1 series.
          `,
      style: { marginBottom: 0 },
    },
    {
      value: `***The 'Reducing CO2' footprint label applies to 65C2 only. All other C2 models feature a 'CO2 Measured' label.
          `,
      style: { marginBottom: 0 },
    },
    {
      value: `****UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size. `,
      style: { marginBottom: 0 },
    },
  ];

  const tabsList = [
    {
      value: "Description",
      style: {
        borderBottom: "2px solid green",
        paddingBottom: 8,
      },
    },
    {
      value: "Specification",
      style: {},
    },
    {
      value: "Reviews",
      style: {},
    },
  ];
  return (
    <>
      <div className="row col-12 border-bottom justify-content-around ">
        <div className="col-12 col-lg-7 d-flex justify-content-between">
          {tabsList.map((tab) => (
            <label
              style={{
                fontWeight: 500,
                fontSize: 15,
                cursor: "pointer",
                ...tab.style,
              }}
            >
              {tab.value}
            </label>
          ))}
        </div>
      </div>

      <div className="col-12 row justify-content-center mt-5 mb-5">
        {detailInfo.map((detail) => (
          <div className="col-9">
            <p
              style={{
                fontSize: 12,
                color: PRIMARY_COLOR,
                ...detail.style,
              }}
            >
              {detail.value}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ItemDetailTabs;
