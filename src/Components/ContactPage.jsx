import React from "react";
import PageHeader from "./PageHeader";
import ContactUs from "./ContactUs";

function ContactPage() {
  return (
    <div>
      <PageHeader text={"Contact Us"} imgSrc={"page-header.jpg"} />
      <ContactUs />
    </div>
  );
}

export default ContactPage;
