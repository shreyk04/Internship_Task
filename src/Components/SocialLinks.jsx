import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
function SocialLinks() {
  return (
    <div className="flex items-center gap-8 social-links my-4">
      <a href="https://www.linkedin.com/company/suvidha-foundation/mycompany/">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a
        href="https://instagram.com/suvidha_mahila_mandal?igshid=YmMyMTA2M2Y="
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <a href="https://www.facebook.com/suvidhamahilamandal/">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </div>
  );
}

export default SocialLinks;
