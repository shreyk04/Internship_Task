import React from "react";
import SocialLinks from "./SocialLinks";
import FooterLink from "./FooterLink";

const FooterHeading = ({ text }) => {
  return <h1 className="text-2xl font-semibold h-[20%]">{text}</h1>;
};
function Footer() {
  return (
    <div className="bg-[#100c08] text-gray-300 p-10">
      <div className="flex flex-col gap-11  text-left w-full lg:flex-row justify-around  ">
        <div className="w-full flex flex-col gap-3  lg:w-[50%] ">
          <FooterHeading text={"Suvidha Foundation (Suvidha Mahila Mandal)"} />
          <p>Office Headquarters-</p>
          <h2 className="text-xl font-semibold">Nagpur Headquarter:</h2>
          <p className="">
            Suvidha Foundation, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner
            Nagpur, Maharashtra 441102
          </p>
          <h2 className="text-xl font-semibold">Hyderabad Headquarter:</h2>
          <p>Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad</p>
          <SocialLinks />
        </div>
        <div className="certificates w-full  flex flex-col gap-4  lg:w-[25%]">
          <FooterHeading text={"Certificates"} />
          <FooterLink
            text={"80G Certificate"}
            link={
              "https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf"
            }
          />
          <FooterLink
            text={"12A Certificate"}
            link={
              "https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf"
            }
          />
          <FooterLink
            text={"CSR Certificate"}
            link={"https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF"}
          />
          <FooterLink
            text={"Suvidha Darpan Registration"}
            link={
              "https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf"
            }
          />
          <FooterLink
            text={"Suvidha Pan Card"}
            link={
              "https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf"
            }
          />
        </div>
        <div className="certificates w-full flex flex-col gap-4  lg:w-[25%] ">
          <FooterHeading text={"Useful Links"} />
          <FooterLink
            text={"Verify your Certificate"}
            link={"https://suvidhafoundationedutech.org/verify.php"}
          />
          <FooterLink text={"Privacy Policy"} link={"privacypolicy.php"} />
        </div>
      </div>
      <div className="w-full h-[0.2px] my-4 bg-white"></div>
      <div className="w-full flex justify-between flex-col gap-3 md:flex-row">
        <p>© Suvidha Foundation (Suvidha Mahila Mandal), All Right Reserved.</p>
        <p>By Suvidha Foundation</p>
      </div>
    </div>
  );
}

export default Footer;
