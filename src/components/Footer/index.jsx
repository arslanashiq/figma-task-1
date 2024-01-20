import React from "react";
import FooterSocialSection from "./components/FooterSocialSection";
import { FOOTER_SECTION_WITH_LINK } from "utilities/constants";
import FooterSectionWithLink from "./components/FooterSectionWithLink";

import paymentMethodsImage from "assets/payment-methods.png";
function Footer() {
  return (
    <div className="container-fluid mt-4">
      <div className="container border-bottom">
        <div className="row">
          <FooterSocialSection />

          {FOOTER_SECTION_WITH_LINK.map((section) => (
            <FooterSectionWithLink {...section} />
          ))}
        </div>
      </div>
      <div className="container mt-4 mb-4">
        <div className="row justify-content-between">
          <div className="col-6 p-0" style={{ fontSize: 13 }}>
            © 2022, All rights reserved
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-md-end">
            <img src={paymentMethodsImage} alt="payment" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
