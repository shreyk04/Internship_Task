import React from "react";
import DonorContribution from "./DonorContribution";
import PageHeader from "./PageHeader";
import SectionHeader from "./SectionHeader";

function DonorsPage() {
  return (
    <div className="bg-slate-50">
      <PageHeader text={"Meet Our Donors"} imgSrc={"Donation.jpg"} />
      <SectionHeader
        section={"Thank You For Your Contribution"}
        sectionText={`"Every contribution brings us closer to our goals"`}
      />
      <DonorContribution />
    </div>
  );
}

export default DonorsPage;
