import React from "react";
import PageHeader from "./PageHeader";

const Text = ({ title, text }) => {
  return (
    <p>
      <span className="font-semibold  ">{title}</span>
      <span className="mx-2">:</span>
      <span className="text-slate-900 font-medium">{text}</span>
    </p>
  );
};
function HelpUsPage() {
  return (
    <div>
      <PageHeader text={"Help Us"} imgSrc={"page-header.jpg"} />
      <div className="flex justify-around p-8">
        <div className="flex flex-col gap-3 text-left text-xl font-semibold text-red-800">
          <h1>For Indian Donors</h1>
          <h2>Bank Of Baroda</h2>
          <Text title={"City"} text={"Nagpur"} />
          <Text title={"Contact No"} text={"+91 8010996763"} />
          <Text title={"Account Name"} text={" Suvidha Mahila Mandal"} />
          <Text title={"Suvidha Account No"} text={"9784100027609"} />
          <Text title={"IFSC Code"} text={"BARB0DBKPAR"} />
        </div>
        <div className="w-80 h-80 ">
          <img
            src={process.env.PUBLIC_URL + `/images/home/qrCode.png`}
            alt=""
            className="w-full h-full  object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HelpUsPage;
