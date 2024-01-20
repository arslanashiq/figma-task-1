import React from "react";
import ProductRating from "components/ProductListing/components/ProductRating";
import iphone1 from "assets/iphone1.png";
import iphone3 from "assets/iphone3.png";
import star from "assets/star.png";
import arrow from "assets/arrow.png";
import goldStar from "assets/golden-star.png";
import {
  BACKGROUND_COLOR,
  BUTTON_BACKGROUND_COLOR,
  PRIMARY_COLOR,
} from "utilities/constants";

const featuresList = [
  "α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling",
  "Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume",
  "Hands-free Voice Control, Always Ready",
  "Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode",
];
const buttonStyles = {
  paddingLeft: 18,
  paddingRight: 18,
  backgroundColor: "white",
  color: BUTTON_BACKGROUND_COLOR,
  border: `1px solid silver`,
  fontSize: 25,
  fontWeight: "bold",
  padding: "0px 18px 0px 18px",
};

function ItemDetailPageInfo() {
  return (
    <>
      <div className="row col-12 col-lg-6 d-flex align-items-center justify-content-center">
        <div className="col-12">
          <img
            src={iphone1}
            style={{ height: "100%", width: "100%" }}
            alt="iphone"
          />
        </div>

        <div className="row col-12 align-items-center justify-content-between mb-5">
          <img
            src={arrow}
            style={{
              height: 25,
              width: 50,
              marginRight: 1,
              cursor: "pointer",
            }}
            alt="arrow"
            className="rotate-icon"
          />
          <div
            className="row col gap-3 justify-content-between item-detail-gallery"
            style={{ overflowX: "auto" }}
          >
            {[iphone1, "", iphone3].map((item) => (
              <div
                className="col col-lg-3"
                style={{
                  padding: "10px 10px",
                  height: 80,
                  backgroundColor: BACKGROUND_COLOR,
                }}
              >
                {item ? (
                  <img
                    src={item}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    alt="iphone"
                  />
                ) : (
                  <div />
                )}
              </div>
            ))}
          </div>
          <img
            src={arrow}
            style={{
              height: 25,
              width: 50,
              marginRight: 1,
              cursor: "pointer",
            }}
            alt="arrow"
          />
        </div>
      </div>
      <div className="col-12 col-lg-6" style={{ marginTop: 75 }}>
        <h5>LG C2 42 (106cm) 4K Smart OLED evo TV |WebOS | Cinema HDR</h5>
        <ProductRating
          arrayLength={4}
          icon={goldStar}
          style={{ height: 14, width: 14, marginTop: 20 }}
        />
        <ProductRating
          arrayLength={1}
          icon={star}
          style={{ height: 14, width: 14, marginTop: 20 }}
        />

        <div className="mt-5">
          {featuresList.map((feature) => (
            <li
              key={feature}
              style={{
                fontSize: 12,
                color: PRIMARY_COLOR,
                marginBottom: 5,
              }}
            >
              {feature}
            </li>
          ))}
        </div>
        <div
          className="mt-5 mb-5"
          style={{
            fontSize: 10,
          }}
        >
          <p>
            Availability: <span style={{ color: "red" }}>2</span> in Stock
          </p>
        </div>
        <div
          className="mt-5"
          style={{
            fontSize: 10,
          }}
        >
          <p className="mb-0">USD</p>
        </div>

        <div
          className="mb-3"
          style={{
            fontSize: 18,
          }}
        >
          <p>
            $600.72
            <span
              style={{
                marginLeft: 10,
                textDecoration: "line-through",
                color: "red",
                fontSize: 14,
              }}
            >
              $750.72
            </span>
            <span
              style={{
                marginLeft: 10,
                color: PRIMARY_COLOR,
                fontSize: 14,
              }}
            >
              Make an offer?
            </span>
          </p>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-lg-5 mb-3">
            <div
              className="col d-flex justify-content-center"
              style={{ width: 150 }}
            >
              <div className="input-group">
                <button style={buttonStyles}>-</button>
                <input
                  style={{
                    border: `1px solid silver`,
                    fontWeight: "bold",
                  }}
                  type="number"
                  className="text-center form-control form-control-sm"
                  placeholder="0"
                />
                <button style={buttonStyles}>+</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div
              className="col d-flex justify-content-between"
              // style={{ width: 150 }}
            >
              <div className="input-group">
                <button
                  style={{
                    backgroundColor: BUTTON_BACKGROUND_COLOR,
                    color: "white",
                    borderRadius: 1,
                    fontSize: 14,
                    height: 40,
                    padding: "0px 20px",
                  }}
                >
                  Buy Now
                </button>
              </div>
              <div className="input-group">
                <button
                  style={{
                    border: `1px solid ${BUTTON_BACKGROUND_COLOR}`,
                    color: BUTTON_BACKGROUND_COLOR,
                    backgroundColor: "white",
                    borderRadius: 1,
                    fontSize: 14,
                    height: 40,
                    padding: "0px 20px",
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetailPageInfo;
