import React, { useMemo } from "react";
import SocialIcon from "./SocialIcon";
// SOCIAL ICONS
import faceBook from "assets/facebook.png";
import instagram from "assets/instagram.png";
import linkedIn from "assets/linkedIn.png";
import twitter from "assets/twitter.png";

// OTHER ICONS
import phone from "assets/phone.png";
import mail from "assets/mail.png";

// components
import FooterSocialSectionContactInformation from "./FooterSocialSectionContactInformation";
import { TEXT_COLOR } from "utilities/constants";

function FooterSocialSection() {
  const iconsList = useMemo(() => [faceBook, linkedIn, instagram, twitter], []);
  return (
    <div className="row d-flex col-lg-3 col-md-6 col-12 gap-3 mb-5">
      {iconsList.map((icon) => (
        <SocialIcon iconSrc={icon} />
      ))}
      <div className="col-12 mt-3 mb-3 p-0">
        <p style={{ fontSize: 12, color: TEXT_COLOR }}>
          Lorem ipsas sum dsac aolor sit amsaet, consectetur asa dipisa scing
          elit. Lorem ipsum
        </p>
      </div>
      <FooterSocialSectionContactInformation
        icon={phone}
        label="Call Us:"
        value="1233-777"
      />
      <FooterSocialSectionContactInformation
        icon={mail}
        label="Email:"
        value="ahamart@contact.com"
      />
    </div>
  );
}

export default FooterSocialSection;
