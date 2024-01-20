import React from "react";
import logo from "assets/logo-main.png";
import search from "assets/search.png";
import user from "assets/user.png";
import cart from "assets/cart-black.png";
import { BUTTON_BACKGROUND_COLOR } from "utilities/constants";

function Header() {
  return (
    <div className="container-fluid border-bottom">
      <div className="container">
        <div
          className="row  justify-content-between align-items-center"
          style={{ minHeight: 90 }}
        >
          <div className="col">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div
            className="col pt-3 pb-3 d-flex justify-content-center"
            style={{ minWidth: 280 }}
          >
            <div className="input-group">
              <div
                className="input-group-text p-0"
                style={{
                  border: `1px solid ${BUTTON_BACKGROUND_COLOR}`,
                }}
              >
                <select
                  className="form-select form-select-sm shadow-none bg-light border-0"
                  style={{ fontSize: 13 }}
                >
                  <option index>Categories</option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                  <option>Four</option>
                </select>
              </div>
              <input
                style={{
                  border: `1px solid ${BUTTON_BACKGROUND_COLOR}`,
                  fontSize: 13,
                }}
                type="text"
                className="form-control"
                placeholder="Search essentials, groceries and more..."
              />
              <button
                className="input-group-text shadow-none"
                style={{
                  backgroundColor: BUTTON_BACKGROUND_COLOR,
                  border: `1px solid ${BUTTON_BACKGROUND_COLOR}`,
                  width: 40,
                }}
              >
                <img src={search} alt="search" style={{ height: "80%" }} />
              </button>
            </div>
          </div>
          <div className="col d-flex justify-content-end align-items-center">
            <img style={{ height: 15, width: 15 }} src={user} alt="user" />
            <label
              style={{
                padding: "0px 20px 0px 10px",
                fontSize: 12,
                borderRight: "1px solid #989898",
              }}
            >
              Hello , Arslan Ashiq
            </label>
            <button
              className="ps-3 input-group-text border-0 shadow-none"
              style={{ backgroundColor: "white" }}
            >
              <img style={{ height: 18, width: 18 }} src={cart} alt="user" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
