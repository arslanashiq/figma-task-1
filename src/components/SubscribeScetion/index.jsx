import React from "react";
import Logo from "assets/Logo.png";
import { PRIMARY_COLOR } from "utilities/constants";
import CustomInput from "./components/CustomInput";

function SubscribeSction() {
  return (
    <div
      className="container-fluid"
      style={{ height: 100, backgroundColor: PRIMARY_COLOR }}
    >
      <div className="container h-100">
        <div className="row h-100 justify-content-between align-items-center">
          <div className="col d-flex justify-content-start">
            <img
              src={Logo}
              alt="Logo"
              style={{ height: 20, objectFit: "contain" }}
            />
          </div>
          <div className="col d-flex justify-content-md-center">
            <CustomInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSction;
